var app = require('express')();
var server = require('http').createServer(app);
var webRTC = require('webrtc.io').listen(server);

var port = process.env.PORT || 8080;
server.listen(port);



app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/style.css', function(req, res) {
  res.sendfile(__dirname + '/style.css');
});

app.get('/fullscrean.png', function(req, res) {
  res.sendfile(__dirname + '/access-media.js');
});

app.get('/script.js', function(req, res) {
  res.sendfile(__dirname + '/script.js');
});

app.get('/webrtc.io.js', function(req, res) {
  res.sendfile(__dirname + '/browser-api.js');
});


