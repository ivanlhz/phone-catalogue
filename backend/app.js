const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
app.use(cors())

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

app.get('/phones', function (req, res) {
  fs.readFile(path.join(__dirname,'phones.json'), 'utf8', async function (err, data) {
    const resp = JSON.parse(data);
    if (err){
      res.status(500).json(err.message)
    }
    await sleep(4000)
    res.json({phones:resp, size: resp.length})
  });
});

app.listen(5000, function () {
  console.log('Listening on port 5000!');
});