import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <li
            className='btn'>
            {this.props.title}
        </li>
    }
}