const Car = require("./cars-model")

const checkCarId = async (req, res, next) => {
  try {
    const cars = await Car.getById(req.params.id)
    if (!cars) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = cars
      next()
    }
} catch (err) {
    next(err)
  }
  
}

const checkCarPayload = (req, res, next) => {
 next()
}

const checkVinNumberValid = (req, res, next) => {
 next()
}

const checkVinNumberUnique = (req, res, next) => {
 next()
}
 
module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};