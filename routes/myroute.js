var express = require('express');
var router = express.Router();

// 對應到的實際網址為 http://localhost:3000/my/hello
//  "/my" 的設定是在app.js中已經引入的myroute.js路由檔所對應的路由路徑
// 在myroute路由檔中會有數個get、post方法所對應的路由路徑，以下包含 "/hello"、"/sum"
router.get('/hello', function(req, res){
    res.send("Hello Nodejs");
});

router.post('/sum', function(req, res){
    var n1 = parseInt(req.body.num1);
    var n2 = parseInt(req.body.num2);
    var mysum = n1 + n2;
    res.json({mySum : mysum});
})

router.get('/sum', function(req, res){
    var n1 = parseInt(req.query.num1);
    var n2 = parseInt(req.query.num2);
    var sum = n1 + n2;
    res.json({ mySum : sum});
});

module.exports = router;