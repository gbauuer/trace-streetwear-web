let currentIndex = 0;
const images = [
    "../images/fears-drop-01-front.png", 
    "../images/fears-drop-01-back.png"
]; // Lista de imágenes

function changeImage(direction) {
    currentIndex += direction;

    // Asegurarse de que el índice esté en el rango
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Cambiar la imagen
    document.getElementById("slider-image").src = images[currentIndex];
}
