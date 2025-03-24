const csv = require('csv-parser');
const fs = require('fs');

const parseFile = (filePath) => {
    const data = [];
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            data.push(row);
        })
        .on('close', () => {
            console.log(`File ${filePath} loaded`);
        })
        .on('error', () => {
            throw new Error(`Unable to parse CSV file ${filePath}`);
        });

    return data;
}

module.exports = {
    parseFile
}