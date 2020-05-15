const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/Item');

router.get('/', async (req, res) => {
  try {
    const allComments = await Item.find();
    return res.status(200).json(allComments);
  } catch (error) {
    console.log(error);
  }
});

router.post('/add', async (req, res) => {
  const name = req.body.name;
  try {
    const newComment = new Comment({
      name,
    });
    await newComment.save();
    return res.status(200).json({ msg: 'please use get request' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
