const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true
  },
  imageURL: {
    type: String,
    required: true

  },
  description: {
    type: String,
    required: true
  },
  contentPost: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true
  },
  category: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true
  },
  estimatedReadTime: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post', postSchema)
