var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile('layouts/index.html')
})

app.listen(8888);
