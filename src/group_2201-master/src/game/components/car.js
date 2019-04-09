import imgUrl from '../../../assets/images/27935-3-hot-wheels-transparent-thumb.png';
import { relative } from 'path';

export class Car {
    constructor(speed = 20, target = document.querySelector('body')) {
        this._speed = speed;
        this._target = target;
        this._currentCoordinates = {
            x: 0,
            y: 0
        };

        this._render();
    }

    _render() {
        this._img = document.createElement('img');
        this._track = document.createElement('div');
        this._img.src = imgUrl;
        this._img.style.position = 'relative';
        this._img.style.transition = 'all 200ms';
        this._track.appendChild(this._img);
        this._target.appendChild(this._track);
    }

    moveRight() {
        this._currentCoordinates.x += this._speed;
        this._img.style.transform = `translateX(${this._currentCoordinates.x}px)`;
    }

    moveLeft() {
        this._currentCoordinates.x -= this._speed;
        this._img.style.transform = `translateX(${this._currentCoordinates.x}px)`;
    }
}