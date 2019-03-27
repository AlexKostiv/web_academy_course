import './dropdown.scss'

export class DropDown {
	constructor(
		target = document.querySelector('body'),
		options = [{title: 'Hello', value: 'hello'}],
		onSelect
	) {
		this._target = target ;
		this._options = options;
		this.onSelect = onSelect;
		this.isOpened = false;
		this.render();
	}

	render() {
		this._button = document.createElement('button');
		this._ul = document.createElement('ul');
		this._root = document.createElement('div');
		this._button.textContent = 'Sort by';

		this._root.classList.add('dropdown');
		this._ul.classList.add('dropdown__list');
		this._button.classList.add('dropdown__control');
		this._button.addEventListener('click', () => this.toggle());

		for(const option of this._options) {
			const li = this.renderItem(option);
			this._ul.appendChild(li)
		}

		this._root.appendChild(this._button);
		this._root.appendChild(this._ul);
		this._target.appendChild(this._root);
	}

	renderItem(option){
		const li = document.createElement('li');
		const button = document.createElement('button');
		button.innerHTML = option.title;

		button.addEventListener('click', () => this.selectOptiion(option));

		li.classList.add('dropdown__item');
		li.appendChild(button);
		return li;
	}

	selectOptiion(option) {
		this._button.innerHTML = option.title;
		this.close();
		if(this.onSelect) {
			this.onSelect(option);
		}
	}

	toggle() {
		if (this.isOpened) {
			this.close()
		} else {
			this.open();
		}
	}

	close(){
		this._root.classList.remove('dropdown_active');
		this.isOpened = false;
	}

	open(){
		this._root.classList.add('dropdown_active');
		this.isOpened = true;
	}
}
