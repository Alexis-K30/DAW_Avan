/*
 * JavaScript de la pagina index
 */
window.onload = init;

let menuVertical = document.getElementById("barraMenu");
let barraNav = document.getElementById("barraNav");
let menuSec = document.getElementsByClassName("segundo-nivel");
let subElem = document.getElementsByClassName("subElemento");
let btnInicio = document.getElementById("btnInicio");
const infoCard = document.getElementById('infoCard');
//const cardImg = document.getElementById('cardImg');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const cardDesc2 = document.getElementById('cardDesc2');
const cardDesc3 = document.getElementById('cardDesc3');
const cardDesc4 = document.getElementById('cardDesc4');

function init() {
    ajustarMenu();
    window.addEventListener("resize", ajustarMenu);
    infoCard.style.display = 'none';

    document.querySelectorAll('.departamento').forEach(depto => {
        depto.addEventListener('mouseenter', (event) => {
            const nombre = event.target.getAttribute('data-nombre');
            const imgSrc = event.target.getAttribute('data-img');
            const descripcion = event.target.getAttribute('data-descripcion');
            const descripcion2 = event.target.getAttribute('data-descripcion2');
            const descripcion3 = event.target.getAttribute('data-descripcion3');
            const descripcion4 = event.target.getAttribute('data-descripcion4');

            cardTitle.textContent = nombre;
            //cardImg.src = imgSrc;
            cardDesc.textContent = descripcion;
            cardDesc2.textContent = descripcion2;
            cardDesc3.textContent = descripcion3;
            cardDesc4.textContent = descripcion4;

            infoCard.style.display = 'block';
            const instance = Popper.createPopper(event.target, infoCard, {
                placement: 'top'
            });
        });
        depto.addEventListener('mouseleave', () => {
            infoCard.style.display = 'none';
        });
    });
}

function ajustarMenu() {
    if (window.innerWidth <= 1000) {
        menuVertical.style.height = window.innerHeight - barraNav.offsetHeight + "px";
    }
    else {
        menuVertical.style.height = 48 + "px";
        for (let i = 0; i < menuSec.length; i++) {
            menuSec[i].style.width = btnInicio.offsetWidth + "px";
        }
        for (let i = 0; i < subElem.length; i++) {
            subElem[i].style.width = btnInicio.offsetWidth + "px";
        }
    }
}
