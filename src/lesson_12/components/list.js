import './list.scss';

export function list(target = document.querySelector('body')) {
	const root = document.createElement('div');
	const form = document.createElement('form');
	const input = document.createElement('input');
	const ul = document.createElement('ul');

	form.appendChild(input);

	input.type = 'text';
	input.placeholder = 'Enter task...';

	root.classList.add('list');
	form.classList.add('list__form');
	input.classList.add('list__input');

	root.appendChild(form);
	root.appendChild(ul);

	form.addEventListener('submit', (eventObject) => {
		eventObject.preventDefault();
		console.log(eventObject);
		renderListItem();
	});


	target.appendChild(root);

	function renderListItem() {
		const value = input.value;
		const li = document.createElement('li');

		li.classList.add('list__item');
		li.textContent = value;

		ul.appendChild(li);
		input.value = '';
	}
}