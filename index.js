const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const config  = require('./config/key'); // Saved API Key in seprate folder and put that folder on gitignore

//express app
const app = express();

//category path id for laptops and health,fitness&beauty
const laptopPath = 'abcat0502000';
const healthFBPath= 'pcmcat242800050021';

//API endpoints urls
const LAPTOP_REQUEST = `https://api.bestbuy.com/beta/products/mostViewed(categoryId=${laptopPath})?apiKey=${config.key}`;
const HEALTHFIT_REQUEST = `https://api.bestbuy.com/beta/products/mostViewed(categoryId=${healthFBPath})?apiKey=${config.key}`;

app.use(bodyParser.json());

//Sends Static Files to Client (React Front End)
app.use(express.static(__dirname + '/client/dist'));

app.get('/api/laptops', (req, res) => {
    //Gets Data from API and sends to the Front-End
    axios.get(LAPTOP_REQUEST).then(response =>  res.send(response.data));
});

app.get('/api/healthFitB', (req, res) => {
    //Gets Data from API and sends to the Front-End
    axios.get(HEALTHFIT_REQUEST).then(response => res.send(response.data));

});
// If API endpoint does not exisit in the server, client is redirected to the home page
app.get('*', (req, res) => {
   res.redirect('/')
});


const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
    console.log('Server started at: '+ PORT)
});
