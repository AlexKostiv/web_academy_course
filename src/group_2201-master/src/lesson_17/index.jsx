import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button.jsx';
import { DropDown } from './components/DropDown.jsx';

const countries = [
    {
        title: 'USA'
    },
    {
        title: 'Canada'
    },
    {
        title: 'Germany'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Test'
        };
    }
    render() {
        return <div>
            <h1>Hello world</h1>
            <input type="text"/>
            <Button title={this.state.title} onClick={ () => this.setState({title: 'Changed title'})} className="asdas"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur enim autem porro eligendi, odit sit nesciunt sequi illo culpa quia veritatis ex minima, blanditiis optio quod asperiores, accusantium necessitatibus et.</p>
            <Button title='Hello' onClick={ () => console.log('CLICKED OTHER') }/>
            <DropDown options={countries} placeholder="Select country..."/>
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)