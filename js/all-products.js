// Fetch data from the JSON file
fetch("js/all-products.json")
  .then((response) => response.json())
  .then((data) => {
    const allProducts = [
      ...data.bedRooms,
      ...data.diningRooms,
      ...data.workspaceRooms,
      ...data.kitchenRooms,
    ];

    // Display all products
    displayProducts(allProducts);
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to display all products
function displayProducts(products) {
  const allProductsDiv = document.getElementById("all-products");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("col-12", "col-md-6", "col-lg-4");

    // Create HTML structure for each product using your template
    productDiv.innerHTML = `
      <div class="product card">
        <span class="discount">${product.disc}</span>
        <span class="wish-icon"><i class="fa-solid fa-heart"></i></span>
        <div class="image">
          <a href="#">
            <img class="img-fluid" src="${product.img}" alt="${product.title}" />
          </a>
        </div>
        <div class="desc">
          <div class="info">
            <h6>${product.title}</h6>
            <p class="price mb-0">$${product.price}</p>
          </div>
          <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    `;

    // Append the product to the all-products container
    allProductsDiv.appendChild(productDiv);
  });
}
