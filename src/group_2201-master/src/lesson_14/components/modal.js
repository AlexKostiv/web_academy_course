import './modal.scss';
import { Button } from './button';
import imgUrl from '../../../assets/images/27935-3-hot-wheels-transparent-thumb.png';

export class Modal {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._render();
    }

    _render() {
        this._modalOutlet = document.createElement('div');
        this._content = document.createElement('div');
        debugger;
        this._modalOutlet.classList.add('modal__outlet');
        this._content.classList.add('modal__content');
        const img = document.createElement('img');

        img.src = imgUrl;

        this._modalOutlet.appendChild(img);
        this._modalOutlet.appendChild(this._content);
        this._target.appendChild(this._modalOutlet);
        this._closeButton = new Button(this._modalOutlet, 'CLOSE', () => {
            this.hide()
        });
        window.btn = this._closeButton;
    }

    show(content) {
        this._modalOutlet.classList.add('modal__outlet_active');
        this._content.innerHTML = content;
    }

    hide() {
        this._modalOutlet.classList.remove('modal__outlet_active');
    }
}