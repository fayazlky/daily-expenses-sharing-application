const express = require('express');
const router = express.Router();
const { createUser, getUserDetails } = require('../controllers/userController');

router.post('/users', createUser);
router.get('/users/:id', getUserDetails);

module.exports = router;
