import './hw_14.scss';
/*import { SortingCategory } from './scripts/sorting_category';*/

function dropDownMenu(target = document.querySelector('body')){
	const menu = document.createElement('div');
	const button = document.createElement('button');
	const list = document.createElement('ul');

	menu.classList.add('menu');
	button.classList.add('menu__btn');
	list.classList.add('menu__category_list');

	button.textContent = 'Sort by';

	menu.appendChild(button);
	menu.appendChild(list);
/*	list.appendChild(SortingCategory());*/
	target.appendChild(menu);

}
dropDownMenu();
