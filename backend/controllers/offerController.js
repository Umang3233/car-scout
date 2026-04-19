const Offer = require("../models/Offer");

exports.createOffer = async (req, res) => {
  const offer = await Offer.create({
    ...req.body,
    buyerId: req.user.id
  });
  res.json(offer);
};

exports.updateOffer = async (req, res) => {
  const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(offer);
};