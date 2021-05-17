const { Router } = require("express");

const {
  getAllRestaurants,
  getRestaurantById,
  updateRestaurantById,
} = require("../controllers/restaurants");

const router = Router();

router.get("/restaurants", getAllRestaurants);

router.get("/restaurants/:id", getRestaurantById);

router.put("/restaurants/:id", updateRestaurantById);

module.exports = router;
