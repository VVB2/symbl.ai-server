const express = require('express');
const app = express();
const cors = require('cors');
const recipe = require('./data.json');
const steps = require('./steps.json');

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.redirect('/api/get-data');
});

app.get('/api/get-data', (req, res) => {
    res.send(steps);
});

app.get('/api/get-recipe', (req, res) => {
    res.send(recipe);
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
