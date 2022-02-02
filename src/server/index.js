var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//for the env variables
const dotenv = require('dotenv');
dotenv.config();

const app = express()

//for requesting cross-origin resources
app.use(cors())

// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

//express uses the build directory of webpack
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../../dist/index.html'));
});

app.listen(8081, function () {
    console.log('App listening on port 8081!');
});

//send the key from the env. file
app.get('/key', function (req, res) {
    res.send(process.env.API_KEY);
});