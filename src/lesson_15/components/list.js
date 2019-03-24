import './list.scss';

export class List {
	constructor(target = document.querySelector('body')){
		this._target = target;
		this._tasks = [];//колекція
		this.render();
		this.fetchData();
	}

	render(){
		this._ul = document.createElement('ul');
		this._ul.classList.add('todos');
		this._target.appendChild(this._ul);
	}

	renderList(){
		for(const task of this._tasks){//модель
			console.log(task);
			const li = this.renderOne(task);
			this._ul.appendChild(li);
		}
	}

	renderOne(task){
		const li = document.createElement('li');
		li.textContent = task.title;
		li.id = task.id;
		if (task.completed) {
			li.classList.add('task__completed');
		}
		return li;
	}

	fetchData(){ //робить запити на сервер
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://evening-dawn-11092.herokuapp.com/list');
		xhr.send();
		const stateChangeHandler = () => {
			if(xhr.readyState === 4){
				if(xhr.status !== 200) {
					console.error('SOMETHING WENT WRONG?');
					return;
				}
				this._tasks = JSON.parse(xhr.response);
				this.renderList();
			}
		}

		xhr.addEventListener('readystatechange', stateChangeHandler);


	}
}