const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const formStep4Schema= new mongoose.Schema({
    instagram: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    siteweb: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fromForm: {
        type: ObjectId,
        ref: 'UserInfo'
    }

}, { timestamps: true });


module.exports = mongoose.model('FormStep4', formStep4Schema);