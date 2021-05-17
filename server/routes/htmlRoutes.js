const { Router } = require("express");

const {
  renderHomePage,
  renderRestaurantsPage,
  renderRestaurantPage,
} = require("../controllers/html");

const router = Router();

router.get("/home", renderHomePage);

router.get("/restaurants", renderRestaurantsPage);

router.get("/restaurants/:id", renderRestaurantPage);

module.exports = router;
