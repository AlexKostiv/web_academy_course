import React from 'react';
import './Logo.scss';

export class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className='logo'>{this.props.title}
            <a href="#">
                <span className='logo__cover'>
                    <img src="../../../assets/images/miacar_logo.png" alt="Logo"/>
                </span>
            </a>
        </li>
    }
}