var Message = require('../models/messages');

// Create message

exports.createMessage = function(req, res){
    var newMessage = new Message({
        username: req.params.username,
        message: req.body.message,
        hashtag: req.body.hashtag
    });
    newMessage.save(function (err) {
        if (err) {
            res.status(404).json({'message': 'Message not saved to DB'});
            res.send('Message not saved to DB');
        }
        res.status(200);
        res.end();
    });
};

// Delete message

exports.deleteMessage = function(req, res){
        Message.remove({username: req.params.username, message: req.params.message}, function (err) {
            if (err) {
                res.status(404).json({'message': 'Message not deleted from DB'});
                res.send('Message not deleted from DB');
        }
        res.status(200);
        res.end();
    })
};

// Read message

exports.readMessages = function(req, res) {
    Message.find({'username' : req.params.username}, function (err, messages) {
        if (err) {
            res.status(404).json({'message': 'Message not read from DB'});
        }
        else {
            res.status(200);
            res.json(messages);
        }
    });
};