var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//透過morgan模組提供的format方法自訂格式
logger.format('test', ':method :url :status :response-time ms :res[content-length]');

// 將自訂的路由index、users、myroute引入
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var myRouter = require('./routes/myroute');   //新增

// 建立express模組
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 使用morgan模組定義的dev以及自定義的test之記錄格式
app.use(logger('dev'));
app.use(logger('test'));

// 讓POST可以解析JSON與urlencoded的資料格式
// 若無設定此段程式碼，則在送出POST request的時候，req.body所取得的資料便會是undefined
// 設定後，req.body的資料格式為 { key1:value1, key2:value2 }
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  加入靜態檔案的目錄位置，讓網頁可以訪問public資料夾下靜態檔案
//  透過 path 來處理專案中的檔案路徑
//  __dirname:回傳被執行的js檔(也就是此app.js檔)所在資料夾的絕對路徑
app.use(express.static(path.join(__dirname, 'public')));

// 使用cookieParser來處理並分析網頁中暫存的cookie資料
app.use(cookieParser());

// 將路由加入app應用中
app.use('/', indexRouter);
app.use('/users', usersRouter);
//將myRouter路由加入app應用中，並將路徑參數設定為「/my」
app.use('/my', myRouter);               //新增

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
