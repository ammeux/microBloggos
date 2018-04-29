var mongoose = require('mongoose');

/* Define the schema of the follow model */

var FollowSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    follow: {
        type: String,
        required: true,
        trim: true
    }
});

var Follow = mongoose.model('followCollection', FollowSchema);
module.exports = Follow;