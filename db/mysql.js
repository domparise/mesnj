var mysql = require('mysql');
var sql = mysql.createConnection({
	host: '0.0.0.0',
	user: 'root',
	password: 'password',
	database: 'mesnj'
});

exports.makeTables = function () {
	sql.query('DROP TABLE IF EXISTS `Something`', function (err) {
		if(err) handle(err,cb);
		var query = 'CREATE TABLE `Something` ( `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, `val` varchar(100) NOT NULL )';
		sql.query(query, function (err) {
			if(err) handle(err,cb);
			return cb();
		});
	});
};

exports.getSomething = function (id, cb) {
	sql.query('select * from Something where id=?',[id], function (err, res) {
		if(err) handle(err,cb);
		return cb(res); 
	});
};

exports.setSomething = function (val, cb) {
	sql.query('insert into Something(val) values (?)', [val], function (err, res) {
		if(err) handle(err,cb);
		return cb(res);
	});
};

function handle (err,cb) {
	console.log(err);
	return cb(false);
};