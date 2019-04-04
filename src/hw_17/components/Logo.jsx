import React from 'react';
import './Logo.scss';

export class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className='logo'>{this.props.title}
            <a href="#">
                <div className='logo__cover'>
                    <div className='logo__bg'>

                    </div>
                </div>
            </a>
        </li>
    }
}