const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const formStep2Schema= new mongoose.Schema({
    nomprenomrepresentant: {
        type: String,
        required: true
    },
    membres: {
        type: String,
        enum : ["less_10", "between_10_50", "between_51_100","greater_100"],
        required: true
    },
    histoirecreation: {
        type: String,
        required: true
    },
    fromForm: {
        type: ObjectId,
        ref: 'UserInfo'
    }

}, { timestamps: true });


module.exports = mongoose.model('FormStep2', formStep2Schema);
