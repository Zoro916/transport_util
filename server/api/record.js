const moment = require('moment');
const router = require('express').Router();
const Record = require('../model').Record;

router.post('/create', (req, res) => {
    const { record_id, date, time, address, transport_code } = req.body;
    if (!record_id) {
        const new_record = new Record({ date, time, address, transport_code });
        new_record.save((err, result) => {
            return res.send({ status: 1, msg: '操作成功' });
        });
    } else {
        Record.update({ record_id }, { date, time, address, transport_code }).exec(err => {
            if (err) {
                return res.send({ status: 0, msg: '数据库异常' })
            }
            return res.send({ status: 1, msg: '操作成功' });
        });
    }
});


router.post('/remove', (req, res) => {
    const { record_id } = req.body;
    Record.remove({ record_id }).exec(err => {
        if (err) {
            return res.send({ status: 0, msg: '数据库异常' })
        }
        return res.send({ status: 1, msg: '操作成功' });
    });
});

module.exports = router;
