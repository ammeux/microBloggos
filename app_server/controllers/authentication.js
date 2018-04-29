var User = require('../models/users');

// register new User

exports.register = function(req, res){
    var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save(function (err) {
        if (err) {
            res.status(404).json( {'message': 'User not saved to DB'});
            res.send('User not saved to DB');
        }
        res.status(200);
        res.end();
    });

};

// login User

exports.login = function(req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err){
                    res.status(200);
                    res.send('Password is Ok');
                } else {
                    res.status(404).json(info);
                }
            })
        }
    }
    )
};