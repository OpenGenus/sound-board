// script.js
const soundButtons = document.querySelectorAll('[data-sound]');

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

