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
        imgDiv.className = "border-2 border-gray-400 rounded-lg p-2 flex items-center justify-center h-40 md:h-60 col-span-1 ";
        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        const img = document.createElement("img");
        img.src = section.image1Src || "/placeholder.svg";
        img.alt = `Imagen para sección ${section.id}`;
        imgContainer.appendChild(img);
        imgDiv.appendChild(imgContainer);

        const textDiv = document.createElement("div");
        textDiv.className = "border-2 border-gray-400 rounded-lg p-2 flex items-center justify-center h-40 md:h-60 col-span-2";
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