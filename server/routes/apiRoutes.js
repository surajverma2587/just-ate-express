const { Router } = require("express");

const { getAllRestaurants } = require("../controllers/restaurants");

const router = Router();

router.get("/restaurants", getAllRestaurants);

module.exports = router;
