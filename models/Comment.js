const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);
