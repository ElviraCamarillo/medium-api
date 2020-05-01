const express = require('express')

const users = require('../usecases/user')
// const auth = require('../middleware/auth')

const router = express.Router()

// GET /users
router.get('/', async (request, response) => {
  try {
    const allUser = await users.getAll()
    response.json({
      success: true,
      message: 'List of registered users',
      data: {
        users: allUser
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

// POST /users/signup -> Registration flow
router.post('/signup', async (request, response) => {
  try {
    const newUser = await users.signup(request.body)
    response.json({
      success: true,
      message: 'The user has been registered',
      data: {
        User: newUser
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
