
/**
 * DEVELOPMENT Environment settings
 */
module.exports = function(app,express) {
		
    app.set('db-uri', 'mongodb://localhost/node-tracker-development');
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
	
}
