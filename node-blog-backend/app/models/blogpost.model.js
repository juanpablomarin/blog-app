// blogpost.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// BlogPost Schema
const BlogPostSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: [String],
  updated: {
    type: Date
  }
});
module.exports = mongoose.model('BlogPost', BlogPostSchema);