const Car = require("../models/Car");

exports.getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.createCar = async (req, res) => {
  const car = await Car.create({
    ...req.body,
    sellerId: req.user.id
  });
  res.json(car);
};

exports.updateCar = async (req, res) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(car);
};

exports.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json("Deleted");
};