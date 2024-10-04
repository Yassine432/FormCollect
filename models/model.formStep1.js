const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const formStep1Schema = new mongoose.Schema({
    nomcooperative: {
        type: String,
        required: true
    },
    datecreation: {
        type: Date,
        required: true
    },
    secteuractivite: {
        type: String,
        required: true
    },
    identifiantICE: {
        type: String,
        required: true
    },
    Localisation: {
        type: String,
        required: true
    },
    fromForm: {
        type: ObjectId,
        ref: 'UserInfo'
    }

}, { timestamps: true });


module.exports = mongoose.model('FormStep1', formStep1Schema);
