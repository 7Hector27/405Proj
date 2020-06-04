const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);
