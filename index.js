const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;

app.use(bodyParser.json());
app.use(express.static('views/front'));
app.use(cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/front/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/front/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});