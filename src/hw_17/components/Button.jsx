import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickQuantity: 0
        };
    }

    render() {
        return <li
            className='btn'
            onClick={() => this.clickHandler()}>
            {this.props.title}
        </li>
    }
}