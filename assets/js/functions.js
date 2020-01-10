var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var pastel = document.getElementById("pastel");

blue.addEventListener("click", () => {
    document.documentElement.style.setProperty("--color-lighter", "#aeccdc");
    document.documentElement.style.setProperty("--color-light", "#d4e7ef");
    document.documentElement.style.setProperty("--color-normal", "#b3cede");
    document.documentElement.style.setProperty("--color-regular", "#80a4c6");
    document.documentElement.style.setProperty("--color-dark", "#5b7dac");
    document.documentElement.style.setProperty("--color-darker", "#5b79ab");
    document.documentElement.style.setProperty("--color-flash", "#68d7f4");
})


red.addEventListener("click", () => {
    document.documentElement.style.setProperty("--color-lighter", "#F5EA91");
    document.documentElement.style.setProperty("--color-light", "#F8D462");
    document.documentElement.style.setProperty("--color-normal", "#f5b636 ");
    document.documentElement.style.setProperty("--color-regular", "#F09536");
    document.documentElement.style.setProperty("--color-dark", "#891525");
    document.documentElement.style.setProperty("--color-darker", "#D55330");
    document.documentElement.style.setProperty("--color-flash", "#EC3E37");
})

green.addEventListener("click", () => {
    document.documentElement.style.setProperty("--color-lighter", "#D9E8B91");
    document.documentElement.style.setProperty("--color-light", "#B2DD58");
    document.documentElement.style.setProperty("--color-normal", "#4EA235");
    document.documentElement.style.setProperty("--color-regular", "#3A9135");
    document.documentElement.style.setProperty("--color-dark", "#319468");
    document.documentElement.style.setProperty("--color-darker", "#2F715B");
    document.documentElement.style.setProperty("--color-flash", "#53E799");
})

pastel.addEventListener("click", () => {
    document.documentElement.style.setProperty("--color-lighter", "#FDFCEF");
    document.documentElement.style.setProperty("--color-light", "#FDF3D0");
    document.documentElement.style.setProperty("--color-normal", "#FCD0DB");
    document.documentElement.style.setProperty("--color-regular", "#D2DAFD");
    document.documentElement.style.setProperty("--color-dark", "#A54E97");
    document.documentElement.style.setProperty("--color-darker", "#502A59");
    document.documentElement.style.setProperty("--color-flash", "#A598EC");
})