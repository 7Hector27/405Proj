const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const connect = require('./config/db');
dotenv.config({ path: './config/config.env' });
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 6000;

connect();

const CommentRoutes = require('./routes/CommentRoutes');
app.use('/api/comment', CommentRoutes);

app.listen(PORT, () => {
  console.log('Server is running');
});
