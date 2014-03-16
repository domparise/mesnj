var socket = io.connect('http://0.0.0.0:3001');
socket.on('connect', function () {
	socket.emit('evnt' , { sup:'yolo' });
});