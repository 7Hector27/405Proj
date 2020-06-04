const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

router.get('/', async (req, res) => {
  try {
    const allComments = await Comment.find();
    return res.status(200).json(allComments);
  } catch (error) {
    console.log(error);
  }
});

router.post('/add', async (req, res) => {
  const { name, text } = req.body;
  try {
    await Comment.create({ name, text });
    return res.status(200).json({ msg: 'Success' });
  } catch (error) {}
});

module.exports = router;
/*
try {
  const { text } = req.body;
  const newComment = new Comment({
    text,
  });
  const savedComment = await newComment.save();
  return res.status(200).json(savedComment);
} catch (error) {
  console.log(error);
}
*/
