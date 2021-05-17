const getFromDb = require("../utils/getFromDb");

const getAllRestaurants = (req, res) => {
  const restaurants = getFromDb();

  res.json(restaurants);
};

module.exports = {
  getAllRestaurants,
};
