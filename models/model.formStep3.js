const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const formStep3Schema= new mongoose.Schema({
    typesproduits: [
        {
            key: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
    ],
    materiaux: [
        {
            key: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        }
    ],
    dispocollab: [
        {
            key: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        }
    ],
    livraison:[
        {
            key: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        }
    ],
    fromForm: {
        type: ObjectId,
        ref: 'UserInfo'
    }
}, { timestamps: true });


module.exports = mongoose.model('FormStep3', formStep3Schema);