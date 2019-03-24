import './lesson_14.scss';
import { Button } from './components/button';
import { Modal } from './components/modal';

const modalWindow = new Modal();
window.modalWindow = modalWindow;
for(let i = 0; i < 4; i++) {
	const btn = new Button(undefined, 'Button ' + i, () => {
		modalWindow.show(`<h2>Hello from button ${i}</h2>`)
	});
}

new Button(undefined, 'Show alert', () => alert('Do you like OOD?'));