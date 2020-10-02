const router = require('express').Router();
const verifyT = require('./verifyToken');
const user = require('../model/user');

router.get('/', verifyT, (req, res) => {
  res.send(req.user);
});
module.exports = router;
