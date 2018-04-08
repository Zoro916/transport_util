const moment = require('moment');
const router = require('express').Router();
const Record = require('../model').Record;
const Oil = require('../model').Oil;
const Address = require('../model').Address;

router.post('/daily', (req, res) => {
    const { date } = req.body;

    Record.find({ date }).exec((err, result) => {
        return res.send({ status: 1, msg: '操作成功', data: result });
    });

});

router.post('/address_add', (req, res) => {
    const { value, label } = req.body;
    const new_address = new Address({ value, label });
    new_address.save((err, result) => {
        return res.send({ status: 1, msg: '操作成功' });
    });
});

router.post('/address_list', (req, res) => {
    Address.find().exec((err, result) => {
        return res.send({ status: 1, msg: '操作成功', data: result });
    });
});

router.post('/address_options', (req, res) => {
    Record.find().exec((err, result) => {
        const data = [...new Set(result.map(item => item.address))].map(item => { return { value: item, label: item }; });
        return res.send({ status: 1, msg: '操作成功', data });
    });
});

router.post('/list', (req, res) => {
    const { start, end } = req.body;

    const address = new RegExp(req.body.address);
    const transport_code = new RegExp(req.body.transport_code);

    const record_result = Record.find({ date: { '$lte': end, '$gte': start }, address, transport_code}).exec();
    const oil_result = Oil.find({ date: { '$lte': end, '$gte': start } }).exec();

    Promise.all([record_result, oil_result]).then(data => {

        const record = data[0];
        const oil = data[1];

        const date_set = new Set([
                ...record.map(item => item.date),
                ...((req.body.address|| req.body.transport_code) ? [] : oil.map(item => item.date))
            ]);

        const date_arr = [...date_set];

        const parseRecord = (date, arr) => {
            return arr.filter(item => date === item.date)
                .map(record => {
                    const { date, time, address, transport_code, record_id } = record;
                    return { date, time, address, transport_code, record_id };
                });
        };


        const result = date_arr.map(date => {
            const oil_item = oil.filter(item => item.date === date)[0];
            return {
                date,
                oil: oil_item ? oil_item.oil : '0',
                record: parseRecord(date, record),
            };
        }).sort((a, b) => b.date > a.date ? -1 : 1);

        res.send({ status: 1, data: result });
    });
});


module.exports = router;
