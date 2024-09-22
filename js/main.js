// popular products
// const carousel = document.querySelector(".carousel");
// const carouselContainer = document.getElementById("carouselContainer");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// let currentSlide = 0;
// const totalProducts = 14; // Total number of products
// const productsPerSlide = 3; // Number of products per slide
// const slideWidth = 100 / productsPerSlide;

// function updateCarouselPosition() {
//   carousel.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
// }

// nextBtn.addEventListener("click", () => {
//   currentSlide++;
//   if (currentSlide >= totalProducts) {
//     currentSlide = 0;
//   }
//   updateCarouselPosition();
// });

// prevBtn.addEventListener("click", () => {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = totalProducts - 1;
//   }
//   updateCarouselPosition();
// });

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
    const quantityElement =
      button.previousElementSibling.querySelector(".quantity");
    const productQuantity = parseInt(quantityElement.textContent, 10);

    if (productQuantity > 0) {
      const product = cart.find((item) => item.name === productName);

      if (product) {
        product.quantity += productQuantity; // Update quantity
      } else {
        cart.push({
          name: productName,
          price: productPrice,
          quantity: productQuantity,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      quantityElement.textContent = "0";
    }
  });
});
// changing background src''//
// document.querySelectorAll(".product").forEach((product) => {
//   product.addEventListener("click", (event) => {
//     const img = product.querySelector("img").src;
//     carouselContainer.style.backgroundImage = `url(${img})`;
//   });
// });
var swiper = new Swiper(".mySwiper-products", {
  centeredSlides: false,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// testimonials users
var xhr = new XMLHttpRequest();
xhr.open("GET", "json/testimonials.json");
xhr.send();
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    var testis = JSON.parse(xhr.responseText);
    let testiImg = document.querySelectorAll(".testimonials .image");
    for (t = 0; t < testiImg.length; t++) {
      let image = testiImg[t];
      image.innerHTML += `<img src= "${testis[t].img}" />`;
    }
  }
});

// swiper library
var swiper = new Swiper(".testiswiper ", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
});

// own creation
var swiper = new Swiper(".mySwiper-creation", {
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
