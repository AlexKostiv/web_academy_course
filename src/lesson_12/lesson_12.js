import './lesson_12.scss';
import { greetWidget } from './components/greet';
import { list } from './components/list';

const button = document.querySelector('#btn');
const content = document.querySelector('.content');

button.onclick = () =>
	greetWidget(content);


function analize() {
	let i = 0;
	const buttons =document.querySelectorAll('button');

	for(let button of buttons) {
		button.addEventListener('click', () => {
			i++;
			console.log(i);
		});
	}
}


list();
analize();