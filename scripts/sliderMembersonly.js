let currentIndex = 0;
const images = [
    "../images/membersonly-drop-01-front.png",
    "../images/membersonly-drop-01-back.png",
     "../images/talles-drop-01.png"
];

function changeImage(direction) {
    const imageElement = document.getElementById("slider-image");

    // Desvanecer la imagen actual
    imageElement.style.opacity = 0;

    // Cambiar la imagen después del tiempo de transición
    setTimeout(() => {
        currentIndex += direction;

        // Asegurarse de que el índice esté en el rango
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Actualizar la fuente de la imagen
        imageElement.src = images[currentIndex];

        // Hacer que aparezca la nueva imagen
        imageElement.style.opacity = 1;
    }, 500); // Tiempo debe coincidir con la transición CSS
}
