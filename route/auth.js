var express = require('express');
var router = express.Router();

var loginController = require('../controller/authController')

/* GET users listing. */
router.get('/login', function(req, res, next) {
  // res.send('auth route');
  loginController(req,res);
});

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.send('hello for auth route');
});

module.exports = router;