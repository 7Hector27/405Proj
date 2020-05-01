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
