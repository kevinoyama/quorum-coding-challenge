const csv = require('csv-parser');
const fs = require('fs');

const parseFile = (filePath) => {
    return new Promise((resolve, reject) => {
        let data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
               data.push(row)
            })
            .on('end', () => {
                console.log(`File ${filePath} loaded`);
                resolve(data);
            })
            .on('error', () => {
                reject(`Unable to parse CSV file ${filePath}`);
            });
    });
}

module.exports = {
    parseFile
}