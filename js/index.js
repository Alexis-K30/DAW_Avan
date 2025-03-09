//Ambas funciones solo cumplen el funcionamiento de hacer aparecer
//y desaparecer el menu lateral
function abrirMenu(){
    document.getElementById("right-menu").classList.add("open");
}

function cerrarMenu(){
    document.getElementById("right-menu").classList.remove("open")
}

window.onload = init;

function init () {

}