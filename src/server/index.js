var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//let textApi = new meaningCloud({
//application_key: process.env.API_KEY
//});

const app = express()

//for requesting cross-origin resources
app.use(cors())

// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../../dist/index.html'));
});

app.listen(8081, function () {
    console.log('App listening on port 8081!');
});

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})