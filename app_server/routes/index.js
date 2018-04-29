var express = require('express');
var router = express. Router();
var ctrlAuth = require('../controllers/authentication');
var ctrlMess = require('../controllers/messages');
var ctrlFoll = require('../controllers/follows');
var mongoose = require('mongoose');
var configDB = require('../models/db');

/* Connect to mongoose DB */
mongoose.connect(configDB.url);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Express RESTful API');
});

/* FollowUps page */

router.get('/follow', ctrlFoll.readUsers);
router.post('/follow/:username', ctrlFoll.followUser);
router.post('/unfollow/:username', ctrlFoll.unfollowUser);
router.get('/follow/:username', ctrlFoll.readFollows);
router.post('/follow/read/follows', ctrlFoll.readFollowsPosts);

/* LOGIN & REGISTER pages*/

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

/* CRUD Message page */

router.get('/message/:username', ctrlMess.readMessages);
router.post('/message/:username', ctrlMess.createMessage);
router.delete('/message/:username/:message', ctrlMess.deleteMessage);

module.exports = router;