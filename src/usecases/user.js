const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const User = require('../models/user')

// Fuction for user GET
function getAll () {
  return User.find()
}

// Fuction for user signup.
async function signup (newUserData) {
  const { email, password } = newUserData
  if (!email) throw new Error('Email is requiered')
  if (!password) throw new Error('Password is requiered')

  const userAlReadyExists = await User.findOne({ email })

  if (userAlReadyExists) throw new Error('Email is already registered')
  if (password.legth < 8) throw new Error('Password must be 8 characters minimum')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...newUserData, password: hash })
}

// Fuction  for user login.
async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Email is not registered')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('Incorrect data')

  // Token creation
  return jwt.sign({ id: user._id })
}

module.exports = {
  getAll,
  signup,
  login
}
