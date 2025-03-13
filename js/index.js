window.onload = init;

let menuVertical = document.getElementById("barraMenu");
let barraNav = document.getElementById("barraNav");

function init () {
    ajustarMenu();
    window.addEventListener("resize", ajustarMenu);
}

function ajustarMenu() {
    if (window.innerWidth <= 1000) {
        menuVertical.style.height = window.innerHeight - barraNav.offsetHeight + "px";
    }
}