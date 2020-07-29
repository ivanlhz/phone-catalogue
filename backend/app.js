const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/phones', function (req, res) {
  fs.readFile(path.join(__dirname,'phones.json'), 'utf8', function (err, data) {
    const resp = JSON.parse(data);
    if (err){
      res.status(500).json(err.message)
    }
    res.json({phones:resp, size: resp.length})
  });
});

app.listen(5000, function () {
  console.log('Listening on port 5000!');
});