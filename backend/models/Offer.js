const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  offerPrice: Number,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Offer", offerSchema);
