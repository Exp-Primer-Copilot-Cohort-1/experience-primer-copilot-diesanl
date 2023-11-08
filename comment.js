// Create Web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

// Handle request
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


