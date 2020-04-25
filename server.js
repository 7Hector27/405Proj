const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const connect = require('./config/db');
dotenv.config({ path: './config/config.env' });

app.use(cors());

const PORT = process.env.PORT || 6000;

connect();

app.listen(PORT, () => {
  console.log('Server is running');
});

var http = require('http');

//create a server object:
http
  .createServer(function (req, res) {
    res.write('hello world'); //write a response to the client
    res.end(); //end the response
  })
  .listen(6000); //the server object listens on port 8080
