const express = require('express');
const path = require('path');
const { parseFile } = require('./parser/csv-parser');
const app = express();
const port = process.env.PORT;

app.get('/legislators/votes', async (req, res) => {
    
    const legislators = await parseFile('./data/legislators_(2).csv')
    const voteResults = await parseFile('./data/vote_results_(2).csv')
    const response = [];

    for (let i = 0; i < legislators.length; i++) {

        const legislator = legislators[i];

        const votes = voteResults.filter(vote => vote.legislator_id == legislator.id);

        response.push({
            id: legislator.id,
            name: legislator.name,
            supportedBillsCount: votes.reduce((acc, curr) => curr.vote_type == '1' ? acc + 1 : acc, 0),
            opposedBillsCount: votes.reduce((acc, curr) => curr.vote_type == '2' ? acc + 1 : acc, 0)
        });
    }

    return res.send(response);

});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
