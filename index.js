const server = require('./server.js')

const PORT = 7500
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **\n`)
})

