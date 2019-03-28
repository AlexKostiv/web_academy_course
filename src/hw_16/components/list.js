import { Request } from '../utils/request';

import './list.scss';
const prodURL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class List {
	constructor(target = document.querySelector('body')) {
		this._target = target;
		this._tasks = [];// COLLECTION
		this._request = new Request();
		this.render();
		this.fetchData();
	}

	onSubmit(e) {
		e.preventDefault();
		const value = this._input.value;
		const value2 = this._textarea.value;
		const requestData = JSON.stringify({ author: value, text: value2 });

		this._request.post(
			prodURL,
			requestData,
			(response) => {
				const newItem = this.renderOne(JSON.parse(response));
				this._ul.appendChild(newItem);
				this._input.value = '';
				this._textarea.value2 = '';
			},
			(status, response) => {
				alert(response);
			});
		this._textarea.value = '';
	}

	render() {
		this._form = document.createElement('form');
		this._input = document.createElement('input');
		this._textarea = document.createElement('textarea');
		this._button = document.createElement('button');
		this._ul = document.createElement('ul');

		this._input.type = 'text';

		this._form.addEventListener('submit', (e) => this.onSubmit(e));


		this._form.classList.add('form');
		this._textarea.classList.add('form__textarea');

		this._textarea.placeholder = 'Enter your message...';
		this._input.placeholder = 'Enter your name...';

		this._form.appendChild(this._input);
		this._form.appendChild(this._textarea);
		this._form.appendChild(this._button);
		this._target.appendChild(this._form);
		this._target.appendChild(this._ul);

		this._button.textContent = 'Send';

	}

	renderList() {
		for (const task of this._tasks) {// MODEL
			console.log(task);
			const li = this.renderOne(task);
			this._ul.appendChild(li);
		}
	}

	renderOne(task) {
		const li = document.createElement('li');
		const btn = document.createElement('button');
		const span = document.createElement('span');


		const deleteHandler = () => {
			this.removeTask(task.id);
			btn.removeEventListener('click', deleteHandler);
		}

		btn.addEventListener('click', () => deleteHandler());
		btn.textContent = 'X';

		span.innerHTML = '<div class="author">' + task.author + '</div>'+ "<br>" + task.text;

		li.appendChild(span);
		li.appendChild(btn);
		btn.classList.add('form__close_button');
		li.classList.add('form__comment');

		li.id = `task-${task.id}`;

		if (task.completed) {
			li.classList.add('task_completed')
		}
		return li;
	}


	removeTask(id) {
		this._request.delete(prodURL, id, () => {
			const removedEl = this._ul.querySelector(`#task-${id}`);

			this._ul.removeChild(removedEl);
		})
	}

	fetchData() {

		this._request.get(
			prodURL,
			(response) => {
				this._tasks = JSON.parse(response);
				this.renderList();
			},
			(status, response) => {
				alert('Something went wrong');
			});

	}

}