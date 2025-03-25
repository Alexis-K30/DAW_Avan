window.onload = init;

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

function init() {
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
}