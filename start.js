const port = 8110;


var express = require('express');
var app = express();
var request = require('request');
var player = require('play-sound')(opts = {})

// Forward all requests from /api to http://foo.com/api
app.use('/audio/blocker', function(req, res) {

});


app.get('/log', function(req, res) {

});




app.listen(port, function() {
  console.log('\x1b[36m%s\x1b[0m', 'http://localhost:'+port); //cyan
});
