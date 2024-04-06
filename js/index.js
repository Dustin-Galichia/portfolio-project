const texts = ['Konnichiwa, Galichia Dustin desu!', 
    'Hola, soy Dustin Galichia!', "Xin chào, tôi là Dustin Galichia!", `مرحبًا، أنا داستن جاليشيا`,"Hallo, ich bin Dustin Galichia!", ];

const changingText = document.getElementById('changingText');
let index = 0;
function changeText() {
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length; 
}
setInterval(changeText, 3500);



var audio = document.getElementById('record');

function toggleAudio() {
if (audio.paused) {
    audio.play();
} else {
    audio.pause();
}
}