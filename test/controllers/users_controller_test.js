require('../test_helper.js').controller('users', module.exports);

var sinon  = require('sinon');

function ValidAttributes () {
    return {
        login: '',
        githubId: '',
        email: '',
        fullName: '',
        gravatarId: ''
    };
}

exports['users controller'] = {

    'GET new': function (test) {
        test.get('/users/new', function () {
            test.success();
            test.render('new');
            test.render('form.' + app.set('view engine'));
            test.done();
        });
    },

    'GET index': function (test) {
        test.get('/users', function () {
            test.success();
            test.render('index');
            test.done();
        });
    },

    'GET edit': function (test) {
        var find = User.findById;
        User.findById = sinon.spy(function (id, callback) {
            callback(null, new User);
        });
        test.get('/users/42/edit', function () {
            test.ok(User.findById.calledWith('42'));
            User.findById = find;
            test.success();
            test.render('edit');
            test.done();
        });
    },

    'GET show': function (test) {
        var find = User.findById;
        User.findById = sinon.spy(function (id, callback) {
            callback(null, new User);
        });
        test.get('/users/42', function (req, res) {
            test.ok(User.findById.calledWith('42'));
            User.findById = find;
            test.success();
            test.render('show');
            test.done();
        });
    },

    'POST create': function (test) {
        var user = new ValidAttributes;
        var oldSave = User.prototype.save;
        User.prototype.save = function (callback) {
            callback(null);
        };
        test.post('/users', user, function () {
            User.prototype.save = oldSave;
            test.redirect('/users');
            test.flash('info');
            test.done();
        });
    },

    'POST create fail': function (test) {
        var user = new ValidAttributes;
        var oldSave = User.prototype.save;
        User.prototype.save = function (callback) {
            callback(new Error);
        };
        test.post('/users', user, function () {
            User.prototype.save = oldSave;
            test.success();
            test.render('new');
            test.flash('error');
            test.done();
        });
    },

    'PUT update': function (test) {
        var find = User.findById;
        User.findById = sinon.spy(function (id, callback) {
            test.equal(id, 1);
            callback(null, {id: 1, save: function (cb) { cb(null); }});
        });
        test.put('/users/1', new ValidAttributes, function () {
            User.findById = find;
            test.redirect('/users/1');
            test.flash('info');
            test.done();
        });
    },

    'PUT update fail': function (test) {
        var find = User.findById;
        User.findById = sinon.spy(function (id, callback) {
            test.equal(id, 1);
            callback(null, {id: 1, save: function (cb) { cb(new Error); }});
        });
        test.put('/users/1', new ValidAttributes, function () {
            User.findById = find;
            test.success();
            test.render('edit');
            test.flash('error');
            test.done();
        });
    },

    'DELETE destroy': function (test) {
        test.done();
    },

    'DELETE destroy fail': function (test) {
        test.done();
    }
};

