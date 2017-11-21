const port = 8110;

const say = require('say');
var express = require('express');
var app = express();
var request = require('request');
var player = require('play-sound')(opts = {})

// Forward all requests from /api to http://foo.com/api
app.use('/coin', function(req, res) {
	player.play('audio/coin-sound.mp3', function(err) {
		if (err) throw err;
	});
	res.send('<h2>coin</h2>');
});
app.use('/text/:text', function(req, res) {
	say.speak(req.params.text);
	res.send('<h2>' + req.params.text + '</h2>');
});





app.listen(port, function() {
	console.log('\x1b[36m%s\x1b[0m', 'http://localhost:' + port); //cyan
	console.log('\x1b[36m%s\x1b[0m', 'http://localhost:' + port + "/text/"); //cyan
	console.log('\x1b[36m%s\x1b[0m', 'http://localhost:' + port + "/coin"); //cyan
});
