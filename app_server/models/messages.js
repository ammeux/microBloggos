var mongoose = require('mongoose');

/* Define the schema of the message model */

var MessageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        trim: true
    },
    hashtag: {
        type: String
    }
});

var Message = mongoose.model('messageCollection', MessageSchema);
module.exports = Message;