import React from 'react';

import './DropDown.scss';

export class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            selectedOption: undefined
        }
    }

    open() {
        this.setState({ isOpened: true });
    }

    close() {
        this.setState({ isOpened: false });
    }

    select(option) {
        this.setState({ selectedOption: option, isOpened: false })
    }

    toggle() {
        if (this.state.isOpened) {
            this.close();
        } else {
            this.open();
        }
    }

    render() {
        return <div className={this.state.isOpened ? 'dropdown_active' + ' dropdown' : 'dropdown'}>
            <button
                className='dropdown__control'
                onClick={() => this.toggle()}>
                {this.state.selectedOption ? this.state.selectedOption.title : this.props.placeholder}
            </button>
            <ul className='dropdown__list'>
                {this.renderList()}
            </ul>
        </div>
    }

    renderList() {
        const lis = [];
        for (const option of this.props.options) {
            lis.push(
                <li className={'dropdown__item'}>
                    <button onClick={() => this.select(option)}>{option.title}</button>
                </li>
            );
        }
        return lis;
    }
}   