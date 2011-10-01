app.configure('development', function () {
    app.disable('view cache');
    app.disable('model cache');
    app.disable('eval cache');
    app.use(require('express').errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    app.set('ghId',                 '6ccf33d1252352de7b4a');
    app.set('ghSecret',             '17a159d960e513fe2498b075c0b9be42c7fae078');
});

