const fetchData = async (path, options = {}) => {
  const BASE_URL = "http://localhost:3000";
  const response = await fetch(`${BASE_URL}${path}`, options);
  return response.json();
};

const renderRestaurants = (restaurants) => {
  const createAndAppendRestaurantCard = (restaurant) => {
    const card = `<div class="card text-center just-ate-card">
      <img
        src="${restaurant.logo}"
        class="card-img-top"
        alt="${restaurant.name}"
      />
      <div class="card-body">
        <h3 class="card-title">${restaurant.name}</h3>
        <h5>${restaurant.type}</h5>
        <p class="text-muted">
          ${restaurant.address}
        </p>
        <a href="/restaurants/${restaurant.id}" class="btn btn-primary">Edit</a>
      </div>
    </div>`;

    $("#restaurants").append(card);
  };

  Object.values(restaurants).forEach(createAndAppendRestaurantCard);
};

const onReady = async () => {
  const restaurants = await fetchData("/api/restaurants");

  renderRestaurants(restaurants);
};

$(document).ready(onReady);
