import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickQuantity: 0
        };
    }

    clickHandler() {
        const quantity = this.state.clickQuantity + 1;
        this.setState({ clickQuantity: quantity });
        this.props.onClick();
    }


    render() {
        const style = { backgroundColor: 'green' };
        console.log('Render Button!!');
        return <button
            style={style}
            className={this.props.className ? this.props.className + ' btn' : 'btn'}
            onClick={() => this.clickHandler()}>
            {this.props.title} >>>>>>> {this.state.clickQuantity}
        </button>
    }
}
