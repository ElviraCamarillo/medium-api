const mongoose = require('mongoose')

const dbUser = 'devElvira'
const dbPassword = 'E1v1ra.1'
const dbHost = 'kodemiaseptimageneracion-o1w40.mongodb.net'
const dbName = 'medium'

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
