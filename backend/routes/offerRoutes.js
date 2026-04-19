const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createOffer, updateOffer } = require("../controllers/offerController");

router.post("/", auth, createOffer);
router.put("/:id", auth, updateOffer);

module.exports = router;
