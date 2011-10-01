var everyauth   = require('everyauth'),
mongoose   = require('mongoose');

everyauth.github
    .appId(app.set('ghId'))
    .appSecret(app.set('ghSecret'))
    .findOrCreateUser( function (session, accessToken, accessTokenExtra, githubUserMetadata) {
        var promise = this.Promise();
        mongoose.model('User').findOrCreateByGithubData(githubUserMetadata, promise);
        return promise;
    })
    .redirectPath('/');

app.use(everyauth.middleware());
everyauth.helpExpress(app);
