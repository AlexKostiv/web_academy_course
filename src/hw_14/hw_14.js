import './hw_14.scss';
import { DropDown } from './scripts/dropdown';

import { List } from './scripts/list';


const list1 = new List();
const dropDown = new DropDown(document.querySelector('#dropDown'), [

	{
		title: 'Name'
	},
	{
		title: 'Date'
	},
	{
		title: 'Price'
	},
	{
		title: 'Size'
	},
], (option) => console.log('SELECTED OPTION', option));