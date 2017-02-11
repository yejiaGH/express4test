var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(function(req, res, next) {
// 	// console.log(req.query.__method);
// 	req.oldMethod = req.method;
// 	req.method = req.query.__method;
// 	next();
// });

app.use(methodOverride());
// app.use(methodOverride('__method', {methods: ['GET', 'POST']}));
// app.use(methodOverride('__method', {methods: null}));
// app.use(methodOverride('__method'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride(function(req, res) {
// 	return req.body.__method;
// }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.search('/', function(req, res) {
	res.send('my name is search method.');
});

// app.delete('/', function(req, res) {
// 	res.send('my name is delete method.');
// });

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
