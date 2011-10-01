load('application');

before(loadUser, {only: ['show', 'edit', 'update', 'destroy']});

action('new', function () {
    this.user = new User;
    this.title = 'New user';
    render();
});

action('create', function () {
    this.user = new User;
    ['login', 'githubId', 'email', 'fullName', 'gravatarId'].forEach(function (field) {
        if (typeof body[field] !== 'undefined') {
            this.user[field] = body[field];
        }
    }.bind(this));
    this.user.save(function (errors) {
        if (errors) {
            this.title = 'New user';
            flash('error', 'User can not be created');
            render('new');
        } else {
            flash('info', 'User created');
            redirect(path_to.users);
        }
    }.bind(this));
});

action('index', function () {
    User.find(function (err, users) {
        this.users = users;
        this.title = 'Users index';
        render();
    }.bind(this));
});

action('show', function () {
    this.title = 'User show';
    render();
});

action('edit', function () {
    this.title = 'User edit';
    render();
});

action('update', function () {
    ['login', 'githubId', 'email', 'fullName', 'gravatarId'].forEach(function (field) {
        if (typeof body[field] !== 'undefined') {
            this.user[field] = body[field];
        }
    }.bind(this));

    this.user.save(function (err) {
        if (!err) {
            flash('info', 'User updated');
            redirect(path_to.user(this.user));
        } else {
            this.title = 'Edit user details';
            flash('error', 'User can not be updated');
            render('edit');
        }
    }.bind(this));
});

action('destroy', function () {
    this.user.remove(function (error) {
        if (error) {
            flash('error', 'Can not destroy user');
        } else {
            flash('info', 'User successfully removed');
        }
        send("'" + path_to.users + "'");
    });
});

function loadUser () {
    User.findById(params.id, function (err, user) {
        if (err || !user) {
            redirect(path_to.users);
        } else {
            this.user = user;
            next();
        }
    }.bind(this));
}
