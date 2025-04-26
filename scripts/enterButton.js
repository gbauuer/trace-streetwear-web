document.getElementById('skipIntro').addEventListener('click', function () {
    const mainContent = document.getElementById('mainContent');
    mainContent.style.display = 'block';
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.style.display = 'none';
})

document.getElementById('playButton').addEventListener('click', function () {

    const video = document.getElementById('fullscreenVideo');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const button = document.getElementById('playButton');
    button.style.display = 'none';
    const image = document.getElementById('fullscreenImage');
    image.style.display = 'none';

    video.play(); // Reproduce el video
    // Espera a que la transición de la pantalla de bienvenida termine antes de ocultarla completamente
    // Agregar un evento para cuando el video termine
    video.addEventListener('ended', function () {
        welcomeScreen.classList.add('hidden');

        const mainContent = document.getElementById('mainContent');
        mainContent.classList.remove('hidden'); // Muestra el contenido principal

        // Espera un poco antes de hacer visible el contenido principal
        setTimeout(() => {
            mainContent.style.display = 'block'; // Cambia el display para mostrar el contenido
        }, 10); // Corto retardo para permitir que la clase .hidden se aplique primero
    });

    video.addEventListener('timeupdate', function () {
        if (video.currentTime >= 3 && video.currentTime < 4) {
            const mainContent = document.getElementById('centerText');
            mainContent.style.display = 'block';
        }
    });

});
