const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/database');
const inquirer = require('./utils/inquirerPrompts');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use((req, res) => {
    res.status(404).end();
});

// Stat server
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});