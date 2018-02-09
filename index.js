const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3050;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

app.get('/data', (req, res) => {
    res.send('d');
})

app.listen(PORT, () => {
    console.log('Server started at: '+ PORT)
})