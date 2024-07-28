const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    splitMethod: { type: String, required: true, enum: ['equal', 'exact', 'percentage'] },
    participants: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, amount: Number, percentage: Number }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);
