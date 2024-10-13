fetch("js/all-products.json")
  .then((response) => response.json())
  .then((data) => {
    const bedroomProducts = data.bedRooms;
    displayProducts(bedroomProducts, "bedrooms");
  })
  .catch((error) => console.error("Error fetching data:", error));

function displayProducts(products, bedrooms) {
  const productsDiv = document.getElementById(bedrooms);
  console.log(productsDiv);
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("col-12", "col-md-6", "col-lg-4");

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
              <p class="price">$${product.price}</p>
            </div>
            <button class="add-to-cart">
            <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      `;

    productsDiv.appendChild(productDiv);
  });
}
