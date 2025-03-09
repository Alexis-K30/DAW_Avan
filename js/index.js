//Ambas funciones solo cumplen el funcionamiento de hacer aparecer
//y desaparecer el menu lateral
function abrirMenu(){
    document.getElementById("right-menu").classList.add("open");
}

function cerrarMenu(){
    document.getElementById("right-menu").classList.remove("open")
}

//Manejadores de eventos que nos ayuda a controlar el menu multinivel, van en parejas, lo que hacen que el submenu se vea y los que hacen que
//desaparezcan
//Estos eventos y funciones hacen que se pueda ver el menu cuando se hace
//hoover en el boton "Zona Occidental"
window.addEventListener("load", function(){
    this.document.getElementsByClassName("items")[0].addEventListener("mouseover", function(){
        document.getElementsByClassName("segundo-nivel")[0].style.display="block";
    })
})

//Estos eventos y funciones hacen que desaparezca el menu cuando se "pierde"
// el hoover en el boton "Zona Occidental"
window.addEventListener("load", function(){
    this.document.getElementsByClassName("items")[0].addEventListener("mouseout", function(){
        document.getElementsByClassName("segundo-nivel")[0].style.display="none";
    })
})

//Estos eventos y funciones hacen que se pueda ver el menu cuando se hace
//hoover en el boton "Zona Central"
window.addEventListener("load", function(){
    this.document.getElementsByClassName("items")[1].addEventListener("mouseover", function(){
        document.getElementsByClassName("segundo-nivel")[1].style.display="block";
    })
})

//Estos eventos y funciones hacen que desaparezca el menu cuando se "pierde"
// el hoover en el boton "Zona Central"
window.addEventListener("load", function(){
    this.document.getElementsByClassName("items")[1].addEventListener("mouseout", function(){
        document.getElementsByClassName("segundo-nivel")[1].style.display="none";
    })
})

//Estos eventos y funciones hacen que se pueda ver el menu cuando se hace
//hoover en el boton "Zona Oriental"
window.addEventListener("load", function(){
    this.document.getElementsByClassName("items")[2].addEventListener("mouseover", function(){
        document.getElementsByClassName("segundo-nivel")[2].style.display="block";
    })
})

//Estos eventos y funciones hacen que desaparezca el menu cuando se "pierde"
// el hoover en el boton "Zona Oriental"
window.addEventListener("load", function(){
    this.document.getElementsByClassName("items")[2].addEventListener("mouseout", function(){
        document.getElementsByClassName("segundo-nivel")[2].style.display="none";
    })
})

//Colocando evento para agregar estilo al hoover desde JavaScript
const item = document.querySelectorAll(".items");

item.forEach(item => {
    item.addEventListener("mouseover", () =>{
        item.classList.toggle("in");
    })
    
    item.addEventListener("mouseout", () =>{
        item.classList.toggle("in");
    })
})