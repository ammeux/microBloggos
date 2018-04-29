var Follow = require('../models/follows');
var User = require('../models/users');
var Message = require ('../models/messages');

// get all users

exports.readUsers = function(req, res) {
    User.find(function (err, members) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.json(members);
        }
    });
};

// Follow new user

exports.followUser = function(req, res) {
    var newFollow = new Follow({
        username: req.params.username,
        follow: req.body.follow
    });
    newFollow.save(function (err) {
        if (err) {
            res.status(404).json(err);
        }
        res.status(200);
        res.end();
    });
};

// Unfollow new user

exports.unfollowUser = function(req, res){
    Follow.remove({username: req.params.username, follow: req.body.follow}, function (err) {
        if (err) {
            res.status(404).json({'message': 'Follow not deleted from DB'});
        }
        res.status(200);
        res.end();
    })
};

// Get all users I follow

exports.readFollows = function(req, res) {
    Follow.find({'username': req.params.username}, function (err, follows) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.json(follows);
        }
    });
};

// Get all posts from users I follow

exports.readFollowsPosts = function (req, res) {
    Message.find({$or: [req.body]}, function (err, posts) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.json(posts);
        }
    });
};