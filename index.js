var loggly = require('loggly');

module.exports = (function() {

	function BunyanLoggly(client) {
		this.client = client;
	}

	BunyanLoggly.prototype.write = function write(rec) {
		this.client.log(rec, function(err, result) {
			if (err) throw new Error(err);
			console.log(result);
		});
	};

	return BunyanLoggly;
})();

