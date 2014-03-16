var server = require('http').createServer(), 
	io = require('socket.io').listen(server, {log:false});

server.listen(3001, function () {
	console.log('Socket.IO:3001');
});

exports.emit = function (event, data) {
	io.sockets.emit(event, data);
};

exports.bind = function (event, fn) {
	io.sockets.on('connection', function (socket) {
		console.log('socket connected');

		// on a given event trigger, pass data up to app
		socket.on(event, function (data) {
			return fn(socket, data);
		});

		socket.on('disconnect', function () {
			console.log('socket disconnected');
		});

	});
};