document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    let currentMessage = 'abc'; // Mensaje actual

    // Función para desvanecer y mostrar el texto
    function fadeOutIn() {
        // Cambiar el mensaje antes de ocultarlo
        
        textElement.classList.add('hidden'); // Aplica la clase "hidden" para desvanecer
        setTimeout(() => {
            currentMessage = currentMessage === 'DROP 01 EST. 2025 YA DISPONIBLE' ? 'ENVIOS GRATIS A PARTIR DE $2500' : 'DROP 01 EST. 2025 YA DISPONIBLE'; // Cambia el mensaje
            textElement.textContent = currentMessage; // Actualiza el texto
        }, 500);

        // Espera el tiempo de desvanecimiento antes de mostrarlo de nuevo
        setTimeout(() => {
            textElement.classList.remove('hidden'); // Quita la clase "hidden" para mostrar
        }, 1000); // Duración del desvanecimiento (1 segundo)
    }

    // Llama a la función inmediatamente para desvanecer el texto y volver a mostrarlo
    fadeOutIn(); // Llama la función la primera vez

    // Cambia el texto automáticamente cada 3 segundos
    setInterval(fadeOutIn, 4500); // Cambia el texto cada 3 segundos
});
