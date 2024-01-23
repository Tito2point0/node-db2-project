const Car = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  try {
    const cars = await Car.getById(req.params.id);
    if (!cars) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      });
    } else {
      req.car = cars;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = async (req, res, next) => {
  try {
    const { vin, make, model, mileage } = req.body;
    if (!vin) {
      next({ status: 400, message: `vin is missing` });
    } else if (!make) {
      next({
        status: 400,
        message: `make is missing`
      });
    } else if (!model) {
      next({
        status: 400,
        message: `model is missing`
      });
    } else if (!mileage) {
      next({
        status: 400,
        message: `mileage is missing`
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkVinNumberValid = (req, res, next) => {
  if (vinValidator.validate(req.body.vin)) {
    next();
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid`
    });
  }
};

const checkVinNumberUnique = async (req, res, next) => {
 try {
    const existing = await Car.getByVin(req.body.vin);
   if (!existing) {
     next();
   } else {
     next({ status: 400, message: `vin ${req.body.vin} already exists` });
   }
 } catch (err) {
   next(err);
 }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
