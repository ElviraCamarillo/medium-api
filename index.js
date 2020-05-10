const server = require('./src/server')
const dataBase = require('./src/lib/db')

async function main () {
  await dataBase.connect()
  console.log('Data Base Connected :)')
  server.listen(8080, () => {
    console.log('Server is running')
  })
}

main()
  .then(() => {
    console.log('Server is ready')
  })
  .catch(error => console.error('Error: ', error))
