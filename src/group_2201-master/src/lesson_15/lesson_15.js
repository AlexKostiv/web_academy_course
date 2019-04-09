import {List} from './components/list';
import {DropDown} from './components/dropdown';

const list1 = new List();
const dropDown = new DropDown(document.querySelector('#dropDown'), [
    {
        title: 'USA'
    },
    {
        title: 'Canada'
    },
    {
        title: 'Germany'
    }
], undefined, (option) => console.log('SELECTED OPTION:', option));

const dropDown2 = new DropDown(document.querySelector('body'), [
    {
        title: 'English'
    },
    {
        title: 'Chinease'
    },
    {
        title: 'Itallian'
    }
], 'Choose lang',(option) => console.log('SELECTED OPTION:', option));