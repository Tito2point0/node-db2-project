const express = require("express");
const carsRouter = require("./cars/cars-router")
const server = express();

// Fill out details for the following endpoints: cars, sales, sales/:id


server.use(express.json())

 server.use('/api/cars', carsRouter)

server.use('*', (req, res, next) => { 
next({ status: 404, message: 'not found!' }) 
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
