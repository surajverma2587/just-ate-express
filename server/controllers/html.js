const getStaticFilePath = require("../utils/getStaticFile");

const renderHomePage = (req, res) => {
  const filePath = getStaticFilePath("index");

  res.sendFile(filePath);
};

const renderRestaurantsPage = (req, res) => {
  const filePath = getStaticFilePath("restaurants");

  res.sendFile(filePath);
};

const renderRestaurantPage = (req, res) => {
  const filePath = getStaticFilePath("restaurant");

  res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderRestaurantsPage,
  renderRestaurantPage,
};
