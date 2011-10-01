app.configure('production', function () {
    app.enable('view cache');
    app.enable('model cache');
    app.enable('eval cache');
    app.enable('merge javascripts');
    app.enable('merge stylesheets');
    app.use(require('express').errorHandler());
    app.settings.quiet = true;
    app.set('ghId',                 '37d2e2b91083bf02ea44');
    app.set('ghSecret',             'af6d41fee211ea2f1c90a7a52a77f8fee99365c6');
});

