/*//////////// MESNJ web stack ////////////
// Dom Parise - 3/16/14
//
//////////////// INIT //////////////////*/

var express = require('express'),
	app = express(),
	sockets = require('./sockets.js'),
	db = require('./db/mysql.js');

app.set('views','views');
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static('public')); 

app.listen(3000,function(){
	console.log('Express:3000');
});

///////////////// ROUTING ///////////////////

app.get('/route/:view', function (req, res) {
	console.log('routing to dynamic view');
	return res.render(req.params.view);
});

///////////// REALTIME EVENTS ///////////////

sockets.bind( 'evnt', fn);

function fn (socket, data) {
	console.log('event triggered');
}