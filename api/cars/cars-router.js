const express = require("express");
const router = express.Router();
const Car = require("./cars-model");
const {
    checkCarId,
} = require("./cars-middleware");

router.get("/", async (req, res, next) => { 
    try {
        const car = await Car.getAll()
        res.json(car)
    } catch (err) {
        next(err)
    }
});

router.get("/:id",
    checkCarId,
    async (req, res, next) => {
    try {
        const car = await Car.getById(req.params.id)
        res.json(car)
    } catch (err) {
        next(err)
    }
});

router.post("/", async (req, res, next) => {
    res.json("adding a car")
});

module.exports = router;
// const router = require("express").Router()
// const md = require("./cars-middleware")
// const Cars = require("./cars-model")

// router.get("/", async (req, res, next) => {
//     try {
//         const cars = await Cars.getAll()
//         res.json(cars)
//     } catch (err) {
//         next(err)
//     }
// })

// router.get("/:id", md.checkCarId, async (req, res, next) => {
//     try {
//         res.json(req.car)
//     } catch (err) {
//         next(err)
//     }
// })

// router.post("/",
//     md.checkCarPayload,
//     md.checkVinNumberValid,
//     md.checkVinNumberUnique,
//     async (req, res, next) => {
//     try {
//         const newCar = await Cars.create(req.body)
//         res.status(201).json(newCar)
//     } catch (err) {
//         next(err)
//     }
// })  
 