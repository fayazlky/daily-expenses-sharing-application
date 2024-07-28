const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/expenseSharing');

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
