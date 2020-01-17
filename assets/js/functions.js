var blue = document.getElementById("blue");
var marron = document.getElementById("marron");
var purple = document.getElementById("purple");
var pastel = document.getElementById("pastel");

blue.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-body", "#eee");
  document.documentElement.style.setProperty("--color-lighter", "#aeccdc");
  document.documentElement.style.setProperty("--color-light", "#d4e7ef");
  document.documentElement.style.setProperty("--color-normal", "#b3cede");
  document.documentElement.style.setProperty("--color-regular", "#80a4c6");
  document.documentElement.style.setProperty("--color-dark", "#5b7dac");
  document.documentElement.style.setProperty("--color-darker", "#5b79ab");
  document.documentElement.style.setProperty("--color-flash", "#68d7f4");
});

// marron.addEventListener("click", () => {
//     document.documentElement.style.setProperty("--color-body", "#f3f3f3");
//     document.documentElement.style.setProperty("--color-lighter", "#f1c27d");
//     document.documentElement.style.setProperty("--color-light", "#e0ac69");
//     document.documentElement.style.setProperty("--color-normal", "#f1c27d");
//     document.documentElement.style.setProperty("--color-regular", "#ffdbac");
//     document.documentElement.style.setProperty("--color-dark", "#c68642");
//     document.documentElement.style.setProperty("--color-darker", "#8d5524");
//     document.documentElement.style.setProperty("--color-flash", "#e0ac69");
// })

// purple.addEventListener("click", () => {
//     document.documentElement.style.setProperty("--color-body", "#f3f3f3");
//     document.documentElement.style.setProperty("--color-lighter", "#5c5174");
//     document.documentElement.style.setProperty("--color-light", "#66669a");
//     document.documentElement.style.setProperty("--color-normal", "#aaa7cc");
//     document.documentElement.style.setProperty("--color-regular", "#926d88");
//     document.documentElement.style.setProperty("--color-dark", "#aaa7cc");
//     document.documentElement.style.setProperty("--color-darker", "#66669a");
//     document.documentElement.style.setProperty("--color-flash", "#be9fbf");
// })

// pastel.addEventListener("click", () => {
//     document.documentElement.style.setProperty("--color-body", "#f3f3f3");
//     document.documentElement.style.setProperty("--color-lighter", "#ffb3ba");
//     document.documentElement.style.setProperty("--color-light", "#ffdfba");
//     document.documentElement.style.setProperty("--color-normal", "#ffffba");
//     document.documentElement.style.setProperty("--color-regular", "#baffc9");
//     document.documentElement.style.setProperty("--color-dark", "#bae1ff");
//     document.documentElement.style.setProperty("--color-darker", "#ffdfba");
//     document.documentElement.style.setProperty("--color-flash", "#ffb3ba");
// })

green.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-body", "#eee");
  document.documentElement.style.setProperty("--color-lighter", "#ADFF2F");
  document.documentElement.style.setProperty("--color-light", "#32CD32");
  document.documentElement.style.setProperty("--color-normal", "#6B8E23");
  document.documentElement.style.setProperty("--color-regular", "#20B2AA");
  document.documentElement.style.setProperty("--color-dark", "#8FBC8F");
  document.documentElement.style.setProperty("--color-darker", "#2E8B57");
  document.documentElement.style.setProperty("--color-flash", "#3CB371");
});

orange.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-body", "#eee");
  document.documentElement.style.setProperty("--color-lighter", "#ffedcc");
  document.documentElement.style.setProperty("--color-light", "#ffe4b2");
  document.documentElement.style.setProperty("--color-normal", "#ffdb99");
  document.documentElement.style.setProperty("--color-regular", "#ffc966");
  document.documentElement.style.setProperty("--color-dark", "#FF6347");
  document.documentElement.style.setProperty("--color-darker", "#ffe4b2");
  document.documentElement.style.setProperty("--color-flash", "#ffae19");
});

document.getElementById("click-to-start").addEventListener("click", () => {
  document.getElementById("background-svg").classList.remove("mosaique");
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  items: 1,
  //   autoplay: true,
  autoplayTimeout: 10000,
  loop: true,
  lazyLoad: true,
  margin: 15,
  nav: true,
  navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
});
