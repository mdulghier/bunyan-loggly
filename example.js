var bunyan = require('bunyan'),
	loggly = require('loggly'),
	BunyanLoggly = require('./index.js');


var logglyClient = loggly.createClient({
	token: 'yourlogglytoken',
	subdomain: 'logs01',
	auth: {
		username: 'yourusername',
		password: 'yourpasswort'
	},
	json: true
});

var log = bunyan.createLogger({
	name: 'bunyan-loggly-example',
	streams: [{
		type: 'raw',
		level: 'trace',
		stream: new BunyanLoggly(logglyClient)
	}]
});

log.info('This is a test log. ' + new Date());

console.log('done');

setTimeout(function() {
	process.exit();
}, 2000);
