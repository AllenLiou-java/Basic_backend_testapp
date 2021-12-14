var express = require('express');
var mytest = require('../modules/test');    // 引入test模組，並指定給mytest

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: mytest.multi(5,6) });      // 呼叫mytest模組
});

// 導出模組以供其他程式檔案使用
module.exports = router;
