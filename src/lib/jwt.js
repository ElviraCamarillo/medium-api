const jwt = require('jsonwebtoken')

const secret = 'kodemia'

function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

function verify (token = ' ') {
  return jwt.verify(token, secret)
}

module.exports = {
  ...jwt, // Export all jwt methods
  sign,
  verify
}
