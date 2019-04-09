import { Car } from "./car";

export class Controls {
    constructor(car = new Car(), target =  document.querySelector('body')) {
        this._target = target;
        this._car = car;
        this._render();
    }

    _render() {
        this._leftBtn = document.createElement('button');
        this._rightBtn = document.createElement('button');

        this._leftBtn.textContent = 'left';
        this._rightBtn.textContent = 'right';
        
        this._leftBtn.addEventListener('click', () => this._car.moveLeft());
        this._rightBtn.addEventListener('click', () => this._car.moveRight());

        this._target.appendChild(this._leftBtn);
        this._target.appendChild(this._rightBtn);
    }
}