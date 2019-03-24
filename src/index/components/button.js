import './button.scss';

export class Button {
	constructor(target = document.querySelector('body'), title = '', onClick) {//target вказує де повинні появлятись кнопки тобто в body// onClick колбек для з*єднання кнопки з модальним вікном
		this._target = target;// місце куди вставляється кнопка
		this._title = title;// назва кнопки
		this._onClick = onClick;
		this.render();//виклик методу render
	}

	render() {//метoд який відповідає за відмалювання кнопки
		this._button = document.createElement('button');
		this._button.classList.add('btn');
		this._button.innerHTML = `<span>${this._title}</span>`;// відмальовано внутрішній вміст кнопки

		if (this._onClick) {
			this._button.addEventListener('click', (e) => {
				this._onClick(e);
			});
		}

		this._target.appendChild(this._button);
	}
}