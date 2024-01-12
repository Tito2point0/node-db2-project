const express = require("express")

const server = express()

// Fill out details for the following endpoints: cars, sales, sales/:id

const carsRouter = require("./cars/cars-router")

server.use(express.json())

server.use("/api/cars", carsRouter)

server.use('*', (req, res, next) => { 
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server
