document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: 1, title1: 'Nombre 1', image1Src: 'image.webp' },
        { id: 2, title1: 'Nombre 2', image1Src: 'image.webp' },
        { id: 3, title1: 'Nombre 3', image1Src: 'image.webp' },
        { id: 4, title1: 'Nombre 4', image1Src: 'image.webp' },
        { id: 5, title1: 'Nombre 5', image1Src: 'image.webp' },
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