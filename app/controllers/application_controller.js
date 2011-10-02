var everyauth   = require('everyauth');

before(function () {
    protectFromForgery('198f2486ff46d933fddafff3a7d446636f876439');
});

publish('loginRequired', loginRequired);

function loginRequired() {
    if(isLoggedIn()) {
        next();
    }
    else {
        redirect('/auth/github');
    }
}

function isLoggedIn() {
    return req.session.auth && req.session.auth.loggedIn;
}