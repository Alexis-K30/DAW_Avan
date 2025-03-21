/*
 * JavaScript de la pagina index
 */
window.onload = init;

let menuVertical = document.getElementById("barraMenu");
let barraNav = document.getElementById("barraNav");
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
}








/*
 * JavaScript de la pagina creadores
 */

document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: 1, title1: 'Bryan Peña', image1Src: 'img/integrantes/Bryan.jpg' },
        { id: 2, title1: 'Guillermo Hernández', image1Src: 'img/integrantes/Guille.jpg' },
        { id: 3, title1: 'Yassir Meléndez', image1Src: 'img/integrantes/Yassir.jpg' },
        { id: 4, title1: 'Anderson Hernández', image1Src: 'img/integrantes/Anderson.jpg' },
        { id: 5, title1: 'Daniel Flores', image1Src: 'img/integrantes/Daniel.jpg' },
    ];

    const container = document.getElementById("sections-container");

    sections.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "grid grid-cols-3 gap-4 mb-12";

        const imgDiv = document.createElement("div");
        imgDiv.className = "border rounded-lg p-4 flex items-center justify-center h-40 md:h-60 col-span-1";
        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        const img = document.createElement("img");
        img.src = section.image1Src || "/placeholder.svg";
        img.alt = `Imagen para sección ${section.id}`;
        imgContainer.appendChild(img);
        imgDiv.appendChild(imgContainer);

        const textDiv = document.createElement("div");
        textDiv.className = "border rounded-lg p-4 flex items-center justify-center h-40 md:h-60 col-span-2";
        const textSpan = document.createElement("span");
        textSpan.className = "text-xl md:text-2xl";
        textSpan.textContent = section.title1;
        textDiv.appendChild(textSpan);

        if (section.id % 2 === 0) {
            sectionDiv.appendChild(imgDiv);
            sectionDiv.appendChild(textDiv);
        } else {
            sectionDiv.appendChild(textDiv);
            sectionDiv.appendChild(imgDiv);
        }

        container.appendChild(sectionDiv);
    });
});







/*
 * JavaScript de la pagina contactanos
 */

class Validator {
    static validCountries = [
        "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", 
        "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", 
        "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", 
        "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", 
        "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", 
        "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", 
        "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", 
        "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", 
        "Estonia", "Esuatini", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", 
        "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", 
        "Guinea-Bisáu", "Guinea Ecuatorial", "Haití", "Honduras", "Hungría", "India", "Indonesia", 
        "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", 
        "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", 
        "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", 
        "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", 
        "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", 
        "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", 
        "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", 
        "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", 
        "República Checa", "República del Congo", "República Democrática del Congo", 
        "República Dominicana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", 
        "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", 
        "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", 
        "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", 
        "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", 
        "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Vaticano", 
        "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
    ];

    static validateName(name) {
        const namePattern = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/;
        return namePattern.test(name.trim());
    }

    static validateEmail(email) {
        const emailPattern = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email.trim());
    }

    static validateCountry(country) {
        const countryPattern = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/;
        const trimmedCountry = country.trim();

        return (
            countryPattern.test(trimmedCountry) &&
            this.validCountries.some(
                validCountry => validCountry.toLowerCase() === trimmedCountry.toLowerCase()
            )
        );
    }

    static validateMessage(message) {
        return message.trim().length > 10; 
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;

    if (!Validator.validateName(name)) {
        alert('Nombre inválido. Solo letras y un espacio entre palabras.');
        return;
    }

    if (!Validator.validateEmail(email)) {
        alert('Correo electrónico inválido. Verifica el formato.');
        return;
    }

    if (!Validator.validateCountry(country)) {
        alert('País inválido. Asegúrate de ingresar un país válido.');
        return;
    }

    if (!Validator.validateMessage(message)) {
        alert('Mensaje demasiado corto. Debe contener al menos 10 caracteres.');
        return;
    }

    alert('Formulario enviado correctamente.');
});
