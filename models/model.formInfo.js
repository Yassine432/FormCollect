const mongoose = require('mongoose');
const formInfoSchema = new mongoose.Schema({
    person: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    position: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('UserInfo', formInfoSchema);
