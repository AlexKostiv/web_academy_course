import './greet.scss';

function greetWidget(target = document.querySelector('body')) {
	const rootElement = document.createElement('div');
	const button = document.createElement('button');
	const title = document.createElement('h2');

	let isActive = true;

	title.textContent = 'Hello World';
	button.textContent = 'On/off';

	rootElement.classList.add('greet-widget');
	button.classList.add('greet-widget__btn',  'btn', 'btn_color');
	title.classList.add('greet-widget__title');

	rootElement.appendChild(button);
	rootElement.appendChild(title);
	target.appendChild(rootElement);

	button.addEventListener('click', toggle);

	function toggle() {
		if (isActive) {
			toggleOff();
		} else {
			toggleOn();
		}
	}

	function toggleOn() {
		button.classList.add('btn_active');
		rootElement.classList.add('greet-widget_active');
		title.classList.add('greet-widget__title_active');
		isActive = true;
	}


	function toggleOff() {
		button.classList.remove('btn_active');
		rootElement.classList.remove('greet-widget_active');
		title.classList.remove('greet-widget__title_active');
		isActive = false;
	}

	toggle();
}


export { greetWidget };