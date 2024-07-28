const Expense = require('../models/expenseModel');
const User = require('../models/userModel');

exports.addExpense = async (req, res) => {
    try {
        const { description, amount, splitMethod, participants } = req.body;

        // Input validation and split method handling
        let totalPercentage = 0;

        if (splitMethod === 'percentage') {
            participants.forEach(participant => {
                totalPercentage += participant.percentage;
            });

            if (totalPercentage !== 100) {
                throw new Error('Percentages must add up to 100');
            }
        }

        const expense = new Expense({ description, amount, splitMethod, participants });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getIndividualUserExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.user': req.params.userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getOverallExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.downloadBalanceSheet = async (req, res) => {
    try {
        const expenses = await Expense.find().populate('participants.user');
        let balanceSheet = '';

        expenses.forEach(expense => {
            balanceSheet += `Expense: ${expense.description}\nAmount: ${expense.amount}\nSplit Method: ${expense.splitMethod}\n`;
            expense.participants.forEach(participant => {
                balanceSheet += `User: ${participant.user.name}, Amount: ${participant.amount}, Percentage: ${participant.percentage}%\n`;
            });
            balanceSheet += '\n';
        });

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Disposition', 'attachment; filename=balance_sheet.txt');
        res.send(balanceSheet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
