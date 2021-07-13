const audios = [];
let currentAudio = null;
let advice = new Audio('./src/audio/consejo.ogg');
const letters = 'abcdefghijklmnñopqrstuvwxyz';

for (let i = 0; i < letters.length; i++) {
    audios[letters[i]] = new Audio('./src/audio/' + letters[i] + '.ogg');
}

function pageLoaded() {
    document.getElementById('loading').style.display = 'none';
}

function playSound(letter) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = audios[letter];
    audios[letter].play();
}

function playAdvice() {
    advice.pause();
    advice.currentTime = 0;
    advice.play();
}

window.addEventListener('load', pageLoaded);

