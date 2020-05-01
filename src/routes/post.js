const express = require('express')

const posts = require('../usecases/post')

const router = express.Router()

// GET/post
router.get('/', async (request, response) => {
  try {
    const allPosts = await posts.getAll()
    response.json({
      success: true,
      message: 'All posts',
      data: {
        post: allPosts
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// POST/posts
router.post('/', async (request, response) => {
  try {
    const newPost = await posts.create(request.body)
    response.json({
      success: true,
      message: 'Post created',
      data: {
        post: newPost
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

// DELETE/posts
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await posts.deleteById(id)
    response.json({
      success: true,
      message: `The post with id: ${id} has been deleted`,
      data: {
        post: postDeleted
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// PUT/id
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postUpdated = await posts.updateByID(id, request.body)
    response.json({
      success: true,
      message: `The post with id: ${id} has been updated`,
      data: {
        post: postUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
