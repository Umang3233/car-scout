const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getCars, createCar, updateCar, deleteCar } = require("../controllers/carController");

router.get("/", getCars);
router.post("/", auth, createCar);
router.put("/:id", auth, updateCar);
router.delete("/:id", auth, deleteCar);

module.exports = router;