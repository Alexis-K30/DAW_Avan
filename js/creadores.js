function Section({ id, title1, image1Src }) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-12">
            {id % 2 === 0 ? (
                <>
                    {/* img (izquierda para secciones pares) */}
                    <div className="border rounded-lg p-4 flex items-center justify-center h-40 md:h-60 col-span-1">
                        <div className="img-container">
                            <img src={image1Src || "/placeholder.svg"} alt={`Imagen para sección ${id}`} />
                        </div>
                    </div>
                    {/* Nombre (derecha para secciones pares) */}
                    <div className="border rounded-lg p-4 flex items-center justify-center h-40 md:h-60 col-span-2">
                        <span className="text-xl md:text-2xl">{title1}</span>
                    </div>
                </>
            ) : (
                <>
                    {/* Nombre (izquierda para secciones impares) */}
                    <div className="border rounded-lg p-4 flex items-center justify-center h-40 md:h-60 col-span-2">
                        <span className="text-xl md:text-2xl">{title1}</span>
                    </div>
                    {/* img (derecha para secciones impares) */}
                    <div className="border rounded-lg p-4 flex items-center justify-center h-40 md:h-60 col-span-1">
                        <div className="img-container">
                            <img src={image1Src || "/placeholder.svg"} alt={`Imagen para sección ${id}`} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

// Main App component
function App() {
    // 5 secciones
    const sections = [
        { id: 1, title1: 'Nombre 1', image1Src: 'image.webp' },
        { id: 2, title1: 'Anderson Daniel Hernandez Acevedo', image1Src: 'https://via.placeholder.com/300x200.webp' },
        { id: 3, title1: 'Nombre 3', image1Src: 'https://via.placeholder.com/300x200.webp' },
        { id: 4, title1: 'Nombre 4', image1Src: 'https://via.placeholder.com/300x200.webp' },
        { id: 5, title1: 'Nombre 5', image1Src: 'https://via.placeholder.com/300x200.webp' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Creadores</h1>
            <div className="max-w-4xl mx-auto">
                {sections.map(section => (
                    <Section
                        key={section.id}
                        id={section.id}
                        title1={section.title1}
                        image1Src={section.image1Src}
                    />
                ))}
            </div>
        </div>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);