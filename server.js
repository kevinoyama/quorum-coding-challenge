const express = require('express');
const path = require('path');
const { parseFile } = require('./parser/csv-parser');
const app = express();
const port = process.env.PORT;

const bills = parseFile('./data/bills_(2).csv');
const legislators = parseFile('./data/legislators_(2).csv');
const votes = parseFile('./data/votes_(2).csv');
const voteResults = parseFile('./data/vote_results_(2).csv');


app.get('/', (req, res) => {
    res.send('this is a test');
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
