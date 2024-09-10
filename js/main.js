// popular products
const carousel = document.querySelector(".carousel");
const carouselContainer = document.getElementById("carouselContainer");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;
const totalProducts = 14; // Total number of products
const productsPerSlide = 3; // Number of products per slide
const slideWidth = 100 / productsPerSlide;

function updateCarouselPosition() {
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= totalProducts) {
    currentSlide = 0;
  }
  updateCarouselPosition();
});

prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalProducts - 1;
  }
  updateCarouselPosition();
});

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
document.querySelectorAll(".product").forEach((product) => {
  product.addEventListener("click", (event) => {
    const img = product.querySelector("img").src;
    carouselContainer.style.backgroundImage = `url(${img})`;
  });
});
// testimonials users
// var xhr = new XMLHttpRequest();
// xhr.open("GET","json/testimonials.json");
// xhr.send();
// xhr.addEventListener("readystatechange", function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText)
//         var testis = JSON.parse(xhr.responseText);
//         testis.forEach(testi => {
//             var testiImg = document.getElementsByClassName("testi-img")[0];
//             testiImg.style = "display:flex; overflow: hidden;"
//             testiImg.innerHTML += `<div><img src="${testi.img}"/></div>`
//         });

//         console.log(testiImgs)
//         console.log(testis, testiImg)
//     }
// })
var swiper = new Swiper(".testiswiper ", {
  spaceBetween: 30,
  centeredSlides: true,
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
