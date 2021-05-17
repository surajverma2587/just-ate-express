const fetchData = async (path, options = {}) => {
  const BASE_URL = "http://localhost:3000";
  const response = await fetch(`${BASE_URL}${path}`, options);
  return response.json();
};

const onSubmit = async (event) => {
  event.preventDefault();

  const id = $(event.currentTarget).data("id");

  const name = $("#restaurantName").val();
  const type = $("#cuisineType").val();
  const address = $("#address").val();
  const description = $("#description").val();
  const logo = $("#logoUrl").val();
  const phoneNumber = $("#phoneNumber").val();

  const body = {
    name,
    type,
    address,
    description,
    logo,
    phoneNumber,
  };

  await fetchData(`/api/restaurants/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  window.location.href = "/restaurants";
};

const renderForm = (restaurant) => {
  const form = `<form id="restaurant-edit-form" class="card p-3" data-id="${
    restaurant.id
  }">
    <div class="mb-3">
      <label for="restaurantName" class="form-label"
        >Restaurant Name</label
      >
      <input
        type="text"
        class="form-control"
        id="restaurantName"
        value="${restaurant.name}"
      />
    </div>

    <div class="mb-3">
      <label for="cuisineType" class="form-label">Cuisine Type</label>
      <input
        type="text"
        class="form-control"
        id="cuisineType"
        value="${restaurant.type}"
      />
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        value="${restaurant.address}"
      />
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" id="description">${restaurant.description.trim()}</textarea>
    </div>

    <div class="mb-3">
      <label for="logoUrl" class="form-label">Logo URL</label>
      <input
        type="text"
        class="form-control"
        id="logoUrl"
        value="${restaurant.logo}"
      />
    </div>

    <div class="mb-3">
      <label for="phoneNumber" class="form-label">Phone Number</label>
      <input
        type="text"
        class="form-control"
        id="phoneNumber"
        value="${restaurant.phone_number}"
      />
    </div>

    <div class="mb-3">
      <label for="review" class="form-label">Review</label>
      <p id="review">${restaurant.review}</p>
    </div>

    <button type="submit" class="btn btn-primary mb-3" id="${restaurant.id}">
      Save Changes
    </button>
  </form>`;

  $("#restaurant-form").append(form);

  $("#restaurant-edit-form").submit(onSubmit);
};

const onReady = async () => {
  const id = window.location.pathname.split("/")[2];
  const restaurant = await fetchData(`/api/restaurants/${id}`);

  renderForm(restaurant);
};

$(document).ready(onReady);
