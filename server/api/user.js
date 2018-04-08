const moment = require('moment');
const router = require('express').Router();
const User = require('../model').User;
const getuserType = require('../constant/userDef');

router.post('/auth', (req, res) => {
  const { auth_code } = req.body;
  console.log(getuserType(auth_code));
});

module.exports = router;
