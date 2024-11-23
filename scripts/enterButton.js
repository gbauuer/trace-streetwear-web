document.getElementById('skipIntro').addEventListener('click', function () {
    const mainContent = document.getElementById('mainContent');
    mainContent.style.display = 'block';
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.style.display = 'none';
})

document.getElementById('playButton').addEventListener('click', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');
    musicButton.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 6.8935V5.57661C12.5 5.36926 12.5 5.26559 12.5347 5.17738C12.5653 5.09948 12.615 5.03052 12.6792 4.97682C12.752 4.91601 12.8503 4.88323 13.047 4.81766L17.447 3.35099C17.8025 3.23249 17.9803 3.17324 18.1218 3.20877C18.2456 3.23987 18.3529 3.31718 18.4216 3.42484C18.5 3.54783 18.5 3.7352 18.5 4.10994V7.42339C18.5 7.63074 18.5 7.73441 18.4653 7.82262C18.4347 7.90052 18.385 7.96948 18.3208 8.02318C18.248 8.08399 18.1497 8.11677 17.953 8.18234L14.8192 9.22692M12.5 12.5V18.5M12.5 18.5C12.5 19.8807 10.933 21 9 21C7.067 21 5.5 19.8807 5.5 18.5C5.5 17.1193 7.067 16 9 16C10.933 16 12.5 17.1193 12.5 18.5ZM3 3L21 21" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>'; // Cambia el ícono del botón a sin música
    backgroundMusic.play();

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
