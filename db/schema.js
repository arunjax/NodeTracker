var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

  , User        = new Schema
  ;

User.add({
    login: { type: String },
    githubId: { type: String },
    email: { type: String },
    fullName: { type: String },
    gravatarId: { type: String },
    createdAt: {type: Date}
});

User.statics.findOrCreateByGithubData = function (githubUserData, promise) {
    this.findOne( { githubId: githubUserData.id }, function(err, u) {
        if(!u) {
            var U = mongoose.model('User');
            u = new U();
            u.login         = githubUserData.login;
            u.githubId      = githubUserData.id;
            u.email         = githubUserData.email;
            u.fullName      = githubUserData.name;
            u.gravatarId    = githubUserData.gravatar_id;
            u.createdAt     = new Date();
            u.save();
        }
        return promise.fulfill(u);
    });

}

mongoose.model("User", User);

['User'].forEach(function (m) {
    module.exports[m] = mongoose.model(m);
    module.exports[m].modelName = m;
});