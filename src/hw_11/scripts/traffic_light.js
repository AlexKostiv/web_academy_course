

const buttonRed = document.querySelector('.traffic-light__red');
const buttonYellow = document.querySelector('.traffic-light__yellow');
const buttonGreen = document.querySelector('.traffic-light__green');
buttonGreen.onclick = activateGreen;
buttonYellow.onclick = activateYellow;
buttonRed.onclick = activateRed;
function activateRed() {
	buttonRed.classList.add('active');
	buttonYellow.classList.remove('active');
	buttonGreen.classList.remove('active');
}
function activateYellow() {
	buttonYellow.classList.add('active');
	buttonGreen.classList.remove('active');
	buttonRed.classList.remove('active');
}
function activateGreen() {
	buttonGreen.classList.add('active');
	buttonRed.classList.remove('active');
	buttonYellow.classList.remove('active');
}

