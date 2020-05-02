
const Post = require('../models/post')

function getAll () {
  return Post.find().sort({ date: 'descending' })
}

function create (postData) {
  return Post.create(postData)
}

function deleteById (id) {
  return Post.findByIdAndRemove(id)
}

function updateByID (id, newPostData) {
  return Post.findByIdAndUpdate(id, newPostData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateByID
}
