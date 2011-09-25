
/**
 * DEVELOPMENT Environment settings
 */
module.exports = function(app,express) {
		
    app.set('db-uri',               'mongodb://localhost/node-tracker-development');
    app.set('ghId',                 '6ccf33d1252352de7b4a');
    app.set('ghSecret ',            '17a159d960e513fe2498b075c0b9be42c7fae078');
    app.set('gbCallbackAddress',    'http://localhost:3000/auth/facebook');
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
	
}
