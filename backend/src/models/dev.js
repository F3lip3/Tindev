const { Schema, model } = require('mongoose');

const devSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'dev'
        }
    ],
    dislikes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'dev'
        }
    ]
});

module.exports = model('dev', devSchema);
