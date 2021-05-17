const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  return response.json();
};

const onReady = async () => {
  const restaurants = await fetchData("http://localhost:3000/api/restaurants");

  console.log(restaurants);
};

$(document).ready(onReady);
