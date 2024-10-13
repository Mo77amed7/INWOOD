
document.querySelectorAll(".increase").forEach((button) => {
  button.addEventListener("click", (event) => {
    const quantitySpan = event.target.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent, 10);
    quantity++;
    quantitySpan.textContent = quantity;
  });
});

document.querySelectorAll(".decrease").forEach((button) => {
  button.addEventListener("click", (event) => {
    const quantitySpan = event.target.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent, 10);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });
});

const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = button.getAttribute("data-name");
    const productPrice = parseFloat(button.getAttribute("data-price"));
    cart.push({
      name: productName,
      price: productPrice,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

// testimonials users
fetch("js/testimonials.json")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((testis) => {
    let testiImg = document.querySelectorAll(".testimonials .image");
    let testiDesc = document.querySelectorAll(".testimonials .desc");
    let testiJob = document.querySelectorAll(".testimonials .job-title");
    let testiName = document.querySelectorAll(".testimonials .name");
    for (t = 0; t < testiImg.length; t++) {
      let image = testiImg[t];
      let desc = testiDesc[t];
      let name = testiName[t];
      let job = testiJob[t];
      image.innerHTML += `<img src="${testis[t].img}" alt="${testis[t].name}"/>`;
      desc.textContent += testis[t].desc;
      name.textContent += testis[t].name;
      job.textContent += testis[t].job;
    }
  });

////////////////////////////////////////////
// contact page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the usual way
    if (validateForm()) {
      // Simulate sending the form data and show a success message
      alert("Thank you! Your message has been sent successfully.");
      form.reset(); // Reset the form after submission
    }
  });

  function validateForm() {
    let isValid = true;

    const name = document.getElementById(".contact-banner name").value.trim();
    const email = document.getElementById(".contact-banner email").value.trim();
    const phone = document.getElementById(".contact-banner phone").value.trim();
    const message = document.getElementById(".contact-banner message").value.trim();

    // Simple validation checks
    if (name === "") {
      alert("Please enter your name.");
      isValid = false;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    } else if (phone === "") {
      alert("Please enter your phone number.");
      isValid = false;
    } else if (message === "") {
      alert("Please enter your message.");
      isValid = false;
    }

    return isValid;
  }

  // Email validation regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
// Get the button
const backToTopBtn = document.getElementById("back-to-top-btn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopBtn.classList.add("show-back-to-top");
  } else {
    backToTopBtn.classList.remove("show-back-to-top");
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// all-products
fetch("js/all-products.json")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((products) => {
    let product = document.querySelectorAll(".all-products .product");
    let productDisc = document.querySelectorAll(
      ".all-products .product .discount"
    );
    let productImg = document.querySelectorAll(".all-products .product img");
    let productTitle = document.querySelectorAll(
      ".all-products .product .info h3"
    );
    let productPrice = document.querySelectorAll(
      ".all-products .product .info p"
    );
    for (p = 0; p < product.length; p++) {
      let image = productImg[p];
      let discount = productDisc[p];
      let title = productTitle[p];
      let price = productPrice[p];
      image.src += products[p].img;
      discount.textContent += products[p].disc;
      title.textContent += products[p].title;
      price.textContent += products[p].price;
    }
  });

// heart icon Adding ........*//*
document.querySelectorAll(".wish-icon").forEach((heart, index) => {
  const Favorite = JSON.parse(localStorage.getItem("Favorite")) || [];
  const productName = heart.closest(".product").querySelector("h3").innerText;
  if (Favorite.some((item) => item.name === productName)) {
    heart.classList.add("clicked");
  }

  heart.addEventListener("click", function () {
    this.classList.toggle("clicked");
    let Favorite = JSON.parse(localStorage.getItem("Favorite")) || [];

    // const product = this.closest('.product');
    const productName = heart.closest(".product").querySelector("h3").innerText;
    const productPrice = heart.closest(".product").querySelector(".price").innerText;
    const productImg = heart.closest(".product").querySelector("img").src;
    const productDes = heart.closest(".product").querySelector(".description").innerText;

    if (this.classList.contains("clicked")) {
      // Add to favorite
      Favorite.push({
        name: productName,
        price: productPrice,
        img: productImg,
        desc: productDes,
      });
    } else {
      // Remove from favorite
      Favorite = Favorite.filter((item) => item.name !== productName);
    }

    // Save the updated favorite list to localStorage
    localStorage.setItem("Favorite", JSON.stringify(Favorite));
  });
});

fetch("js/popular-products.json")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((products) => {
    let product = document.querySelectorAll(".popular-products .product");
    let productImg = document.querySelectorAll(
      ".popular-products .product img"
    );
    let productTitle = document.querySelectorAll(
      ".popular-products .product .title"
    );
    let productDesc= document.querySelectorAll(
      ".popular-products .product .description"
    );
    let productPrice = document.querySelectorAll(
      ".popular-products .product .price"
    );
    for (p = 0; p < product.length; p++) {
      let image = productImg[p];
      let title = productTitle[p];
      let desc = productDesc[p];
      let price = productPrice[p];
      image.src += products[p].img;
      title.textContent += products[p].title;
      desc.textContent += products[p].desc;
      price.textContent += products[p].price;
    }
  });
