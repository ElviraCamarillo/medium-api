
const express = require('express')

const postsRouter = require('./routes/post')
const usersRouter = require('./routes/user')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())

// Router ->  Posts
app.use('/posts', postsRouter)

// Router -> Users
app.use('/users', usersRouter)

// Router -> Auth
app.use('/auth', authRouter)

module.exports = app
