var express = require('express')
var app = express()
var server = require('http').createServer(app);
var path = require('path');
var port = 8080

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
  console.log(("*******" + "Listening to port " + port + "*******"))
});