var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 回傳回覆訊息，格式可以是字串、陣列、物件及JSON等
  // 若回傳回覆訊息格式確定為JSON，則可使用res.json()，如 res.json({"num":0, "mag":"success"});
  res.send('respond with a resource');
});

module.exports = router;
