const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  const review = await Review.create({
    ...req.body,
    buyerId: req.user.id
  });
  res.json(review);
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ carId: req.params.carId });
  res.json(reviews);
};