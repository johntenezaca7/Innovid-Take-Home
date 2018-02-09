const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')
const config  = require('./config/key')


const app = express();
const PORT = process.env.PORT || 3050;

//current attribute is best selling
const API_REQUEST = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${config.key}&sort=bestSellingRank.asc&facet=bestSellingRank,1&format=json`

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

app.get('/api/laptops', (req, res) => {

    axios.get(API_REQUEST).then(response =>  res.send(response.data));

})

app.listen(PORT, () => {
    console.log('Server started at: '+ PORT)
})