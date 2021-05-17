const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const getAllRestaurants = (req, res) => {
  const restaurants = getFromDb();

  res.json(restaurants);
};

const getRestaurantById = (req, res) => {
  const { id } = req.params;
  const restaurants = getFromDb();

  const restaurant = restaurants[id];

  res.json(restaurant);
};

const updateRestaurantById = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const restaurants = getFromDb();

  const restaurant = restaurants[id];

  const newRestaurant = {
    ...restaurant,
    ...body,
  };

  const newRestaurants = {
    ...restaurants,
    [id]: newRestaurant,
  };

  writeToDb(JSON.stringify(newRestaurants));

  res.json({ success: true });
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  updateRestaurantById,
};
