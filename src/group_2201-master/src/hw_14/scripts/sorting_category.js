import './sorting_category.scss';
export class SortingCategory {
	constructor(target = document.querySelector('body'), title = '', onSelect) {
		this._target = target;
		this._title = title;
		this.onSelect = onSelect;
		this.render();
	}
	render() {
		this._category = document.createElement('li');
		this._category.classList.add('category');
		this._category.innerHTML = `<span>${this._title}</span>`;
		this._category.addEventListener('click', () =>  this.onSelect())
		this._target.appendChild(this._category);
	}
}
