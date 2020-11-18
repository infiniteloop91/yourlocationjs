// import express
const express = require('express');

// init express
const app = express();

app.listen(3000, () => console.log('listening at 3000'));

// want this app to server web pages
// server 1 page index.html

app.use(express.static('public'));