const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { addReview, getReviews } = require("../controllers/reviewController");

router.post("/", auth, addReview);
router.get("/:carId", getReviews);

module.exports = router;