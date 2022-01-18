const csv = require("csv-parser");
const req = require("express/lib/request");
const fs = require("fs");
const result = [];
fs.createReadStream('../Assets/Sales_records.csv')
.pipe(csv())
.on('data', (data) => result.push(data))
.on('end', () => {
  console.log(result);
});