(function() {
	var express = require('express');
	var app = express();

	app.set('views', './tmp/views');
	app.use(express.static('./'));
	app.get('/', function(req, res){
		res.sendFile('tmp/index.html', {root: __dirname});
	});

	app.listen(3000, function(){
		console.log('listening on port 3000');
	});

	module.exports = app;
})();
