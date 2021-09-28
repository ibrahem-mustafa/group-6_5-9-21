const mongoose = require('mongoose')


const transactionSchema = new mongoose.Schema({
    from: {
        id: {type: String, required: true},
        name: {type: String, required: true}
    },
    to: {
        id: {type: String, required: true},
        name: {type: String, required: true}
    },
    type: {
        type: String,
        required: true,
        enum: ['income', 'expense', 'transfer']
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        default: ''
    },
    createdBy: {
        id: {
            type: String, required: true
        },
        name: {
            type: String, required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Transaction = mongoose.model('transactions', transactionSchema)

module.exports = {Transaction}