const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: String,
  brand: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  fuelType: String,
  transmission: String,
  description: String,
  images: [String],
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "available" }
});

module.exports = mongoose.model("Car", carSchema);