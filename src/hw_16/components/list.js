import { Request } from '../utils/request';

import './list.scss';
const prodURL = 'https://evening-dawn-11092.herokuapp.com/list';
const devURL = 'httplocalhost:6001/list';

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
		const requestData = JSON.stringify({ title: value });

		this._request.post(
			prodURL,
			requestData,
			(response) => {
				const newItem = this.renderOne(JSON.parse(response));
				this._ul.appendChild(newItem);
				this._input.value = '';
			},
			(status, response) => {
				alert(response);
			});
	}

	render() {
		this._form = document.createElement('form');
		this._input = document.createElement('input');
		this._input.type = 'text';
		this._form.appendChild(this._input);
		this._form.addEventListener('submit', (e) => this.onSubmit(e));

		this._ul = document.createElement('ul');
		this._ul.classList.add('todos');
		this._target.appendChild(this._form);
		this._target.appendChild(this._ul);
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
		btn.textContent = 'delete';

		span.textContent = task.title;

		li.appendChild(span);
		li.appendChild(btn);

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