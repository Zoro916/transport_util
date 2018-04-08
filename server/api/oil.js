const moment = require('moment');
const router = require('express').Router();
const Oil = require('../model').Oil;

router.post('/create', (req, res) => {
	const { id, date, oil } = req.body;

	Oil.find({ date }).exec((err, result) => {

		if (result.length === 0) {
			Oil.find({ date }).exec((err, result) => {
				if (err) {
					return res.send({ status: 0, msg: '数据库异常' });
				}
				if (result.length === 0) {
					const new_oil_bill = new Oil({ date, oil });
					new_oil_bill.save((err, result) => {
						return res.send({ status: 1, msg: '提交成功' });
					});
				}
			});
		} else {
			Oil.update({ date }, { oil }).exec(err => {
				if (err) {
					return res.send({ status: 0, msg: '数据库异常' })
				}
				return res.send({ status: 1, msg: '修改成功' });
			});
		}

	});

});

module.exports = router;
