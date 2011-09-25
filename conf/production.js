
/**
 * TEST Environment settings
 */
module.exports = function(app,express) {
		
    app.set('db-uri',               process.env.MONGOHQ_URL);
    app.set('ghId',                 '37d2e2b91083bf02ea44');
    app.set('ghSecret',             'af6d41fee211ea2f1c90a7a52a77f8fee99365c6');
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
	
}
