var express = require('express');

var app = express();
app.get('/', function(req, res) {
  res.status(200).json({msg: 'Hello World!'});
});

app.listen(3000, function() {
  console.log('Here we go...');
});