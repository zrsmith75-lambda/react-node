const express = require('express')
const server = express()
const CarsRouter = require('./routes/carsRouter.js')

server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET at / is working'
  })
})

server.use('/api/cars', CarsRouter)




module.exports = server