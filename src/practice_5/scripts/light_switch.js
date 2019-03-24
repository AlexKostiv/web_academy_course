const button = document.querySelector('.widget__bulb-button');
const bulb = document.querySelector('.widget__bulb');
button.onclick = activate;
	function activate () {
	if (button.innerText === "Off"){
		button.innerText = "On";
	    bulb.style.backgroundColor = "yellow";
	}
	else {
		button.innerText = "Off";
		bulb.style.backgroundColor = "";
	}
}
