
import './comment.scss';

export function comment(target = document.querySelector('body')) {
	const root = document.createElement('div');
	const form = document.createElement('form');
	const inputUser = document.createElement('input');
	const textarea = document.createElement('textarea');
	const ul = document.createElement('ul');
	const button = document.createElement('button');

	form.appendChild(inputUser);
	form.appendChild(textarea);
	form.appendChild(button);

	inputUser.type = 'text';
	inputUser.placeholder = 'Enter your name...';

	textarea.placeholder = 'Enter your message...';

	button.textContent = 'Add comment';

	root.classList.add('comment');
	form.classList.add('comment__form');
	inputUser.classList.add('comment__user');
	textarea.classList.add('comment__message');
	button.classList.add('comment__btn');

	root.appendChild(form);
	root.appendChild(ul);

	form.addEventListener('submit', (eventObject) => {
		eventObject.preventDefault();
		console.log(eventObject);
		renderCommentItem();
	});

	target.appendChild(root);

	function renderCommentItem() {
		const valueUser = inputUser.value;
		const valueTextarea = textarea.value;
		const li = document.createElement('li');

		const today = new Date();
		const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		const dateTime = date+' in '+time;

		li.classList.add('comment__item');
		li.innerHTML ="<h3>" + valueUser + "</h3>" + "\n" + "<p>" + valueTextarea + "</p>"+"<div id='date'>" + dateTime + "</div>";

		ul.appendChild(li);
		textarea.value = '';
	}
}