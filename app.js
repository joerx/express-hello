var express = require('express');
var morgan = require('morgan');
var format = require('util').format;

var app = module.exports = express();
app.use(morgan('combined'));

app.get('/', function(req, res) {
  res.status(200).json({
    msg: format('Hello from %s!', req.hostname)
  });
});

app.get('/headers', function(req, res) {
  res.status(200).json(req.headers);
});

app.get('/fail', function(req, res, next) {
  next(new Error('booh!'));
});

app.use(function(err, req, res, next) {
  if (!err.status) {
    console.error(err.stack);
    process.exit(1);
  } else {
    res.status(err.status).json({msg: err.message});
  }
});
