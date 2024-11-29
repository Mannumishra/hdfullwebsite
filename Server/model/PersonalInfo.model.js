const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('PersonalInfo', PersonalSchema)