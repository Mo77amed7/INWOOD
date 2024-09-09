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
