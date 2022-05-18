
const { response } = require('express');
const drinks = require('./models/drinks');

const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;


app.get('/', (request, response) => {
    response.send('Welcome to the GitPub App!');
});

app.get('/drinks', (request, response) => {
    response.render('drinks_index.ejs', {drinks})
});

console.log(drinks)

// app.get('/drinks/:index', (request, response) => {
//     response.render('index.ejs', {allDrinks: drinks});
// });






app.listen(port, () => {
    console.log('Listening on 3000')
});
