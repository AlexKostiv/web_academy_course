import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button.jsx';

import './index.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Test'
        };
    }
    render() {
        return <div>
                <nav className="navbar">
                     <a className="logo" href="#"  >
                         <img src="../../assets/images/image2.jpg" alt="Logo"/>
                     </a>
                     <ul>
                          <Button title="So funktioniert's" onClick={ () => this.setState({title: 'Changed title'})} className="asdas"/>
                          <Button title="Unser Sortiment" onClick={ () => this.setState({title: 'Changed title'})} className="asdas"/>
                          <Button title="Unsere App" onClick={ () => this.setState({title: 'Changed title'})} className="asdas"/>
                          <Button title="Häufige Fragen" onClick={ () => this.setState({title: 'Changed title'})} className="asdas"/>
                     </ul>
            </nav>

        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)