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
        renderListItem();
    });


    target.appendChild(root);

    function renderListItem() {
        const value = input.value;
        const li = document.createElement('li');
        const btn = document.createElement('button');

        li.classList.add('list__item')
        li.textContent = value;

        function removeItem () {
            console.log('Removed');
            ul.removeChild(li);
            btn.removeEventListener('click', removeItem);
        }

        btn.addEventListener('click', removeItem);
        
        li.appendChild(btn);
        ul.appendChild(li);
        input.value = '';
    }
}