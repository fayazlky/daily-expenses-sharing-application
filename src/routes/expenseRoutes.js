const express = require('express');
const router = express.Router();
const { addExpense, getIndividualUserExpenses, getOverallExpenses, downloadBalanceSheet } = require('../controllers/expenseController');

router.post('/expenses', addExpense);
router.get('/expenses/user/:userId', getIndividualUserExpenses);
router.get('/expenses', getOverallExpenses);
router.get('/expenses/balance-sheet/download', downloadBalanceSheet);

module.exports = router;
