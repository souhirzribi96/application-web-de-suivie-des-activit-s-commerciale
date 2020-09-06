var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect(
  "mongodb://admin:admin@cluster0-shard-00-00-ojum4.mongodb.net:27017,cluster0-shard-00-01-ojum4.mongodb.net:27017,cluster0-shard-00-02-ojum4.mongodb.net:27017/LablandtradingDev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var secteurApiRouter = require('./routes/secteur');

var contactApiRouter = require('./routes/contact');

var marqueApiRouter = require('./routes/marque');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/secteur', secteurApiRouter);
app.use('/api/contact', contactApiRouter);
app.use('/api/marque', marqueApiRouter);

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
  res.send(err.status);
});

module.exports = app;
