const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('this is a test');
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
