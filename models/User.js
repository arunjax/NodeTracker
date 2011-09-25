/**
 *  User schema
 *  Created by create-model script  
 **/
 
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var User = new Schema({
    login: String,
    githubId: String,
    email: String,
    fullName: String,
    gravatarId: String,
    createdAt: Date
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

mongoose.model('User', User);
