const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    creditLimit: {
        type: Number,
        required: true
    },
    totalAmountDue: {
        type: Number,
        required: true
    },
    cardHolderName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    expiryMonth: {
        type: Number,
        required: true
    },
    expiryYear: {
        type: Number,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    }
},{
    timestamps:true
})

const CardModel = mongoose.model("CardDetails", cardSchema)

module.exports = CardModel