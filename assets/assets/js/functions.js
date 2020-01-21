var blue = document.getElementById("blue");
var marron = document.getElementById("marron");
var purple = document.getElementById("purple");
var pastel = document.getElementById("pastel");

blue.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-body", "#eee");
  document.documentElement.style.setProperty("--color-lighter", "#496D7E");
  document.documentElement.style.setProperty("--color-light", "#045267");
  document.documentElement.style.setProperty("--color-normal", "#275979");
  document.documentElement.style.setProperty("--color-regular", "#368099");
  document.documentElement.style.setProperty("--color-dark", "#7FADBD");
  document.documentElement.style.setProperty("--color-darker", "#3B7481");
  document.documentElement.style.setProperty("--color-flash", "#B2C9E4");
});

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

green.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-body", "#eee");
  document.documentElement.style.setProperty("--color-lighter", "#67b27a");
  document.documentElement.style.setProperty("--color-light", "#8dc59b");
  document.documentElement.style.setProperty("--color-normal", "#a0cfac");
  document.documentElement.style.setProperty("--color-regular", "#d9ecde");
  document.documentElement.style.setProperty("--color-dark", "#c6e2cd");
  document.documentElement.style.setProperty("--color-darker", "#419f59");
  document.documentElement.style.setProperty("--color-flash", "#67b27a");
  document.documentElement.style.setProperty("--color-opposit", "#AB5A67");
});

ocre.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-body", "#eee");
  document.documentElement.style.setProperty("--color-lighter", "#FEE879");
  document.documentElement.style.setProperty("--color-light", "#FEBE39");
  document.documentElement.style.setProperty("--color-normal", "#FEB771");
  document.documentElement.style.setProperty("--color-regular", "#FAA738");
  document.documentElement.style.setProperty("--color-dark", "#FFDF88");
  document.documentElement.style.setProperty("--color-darker", "#FFB939"); // #8F00FF
  document.documentElement.style.setProperty("--color-flash", "#DFAF65");
});

document.getElementById("click-to-start").addEventListener("click", () => {
  document.getElementById("background-svg").classList.remove("mosaique");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  items: 1,
  // autoplay: true,
  autoplayTimeout: 10000,
  loop: true,
  lazyLoad: true,
  margin: 15,
  nav: true,
  navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
});

technologiesContent = document.getElementById("technologies-content");
entrepreneurshipContent = document.getElementById("entrepreneurship-content");
languagesContent = document.getElementById("languages-content");
softskillsContent = document.getElementById("softskills-content");

document.getElementById("technologies").addEventListener("click", () => {
  technologiesContent.style.display = "block";
  entrepreneurshipContent.style.display = "none";
  languagesContent.style.display = "none";
  softskillsContent.style.display = "none";
})

document.getElementById("entrepreneurship").addEventListener("click", () => {
  technologiesContent.style.display = "none";
  entrepreneurshipContent.style.display = "block";
  languagesContent.style.display = "none";
  softskillsContent.style.display = "none";
})

document.getElementById("languages").addEventListener("click", () => {
  technologiesContent.style.display = "none";
  entrepreneurshipContent.style.display = "none";
  languagesContent.style.display = "block";
  softskillsContent.style.display = "none";
})

document.getElementById("softskills").addEventListener("click", () => {
  technologiesContent.style.display = "none";
  entrepreneurshipContent.style.display = "none";
  languagesContent.style.display = "none";
  softskillsContent.style.display = "block";
})

document.getElementById("mail").addEventListener("click", () => {
  document.getElementById("modal").style.opacity = 1;
  document.getElementById("modal").style.visibility = "visible";
})

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").style.opacity = 0;
  document.getElementById("modal").style.visibility = "hidden";
})