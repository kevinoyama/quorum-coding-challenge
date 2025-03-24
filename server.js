const express = require('express');
const cors = require('cors');
const path = require('path');
const { parseFile } = require('./parser/csv-parser');
const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD',
    credentials: true,
    optionsSuccessStatus: 204,
}
));

app.get('/legislators/votes', async (_, res) => {

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

app.get('/bills', async (_, res) => {

    const legislators = await parseFile('./data/legislators_(2).csv')
    const bills = await parseFile('./data/bills_(2).csv')
    const votes = await parseFile('./data/votes_(2).csv')
    const voteResults = await parseFile('./data/vote_results_(2).csv')

    const response = [];

    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];

        const vote = votes.find(v => v.bill_id == bill.id);
        const primarySponsor = legislators.find(i => i.id == bill.sponsor_id);

        const filteredVoteResults = voteResults.filter(v => v.vote_id == vote.id);

        response.push({
            id: bill.id,
            name: bill.name,
            primarySponsor: primarySponsor?.name ?? 'not found',
            supportersCount: filteredVoteResults.reduce((acc, curr) => curr.vote_type == '1' ? acc + 1 : acc, 0),
            OpposersCount: filteredVoteResults.reduce((acc, curr) => curr.vote_type == '2' ? acc + 1 : acc, 0)
        })

    }

    return res.send(response);

});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
