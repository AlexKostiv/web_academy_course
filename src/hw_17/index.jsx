import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button.jsx';
import { Logo } from './components/Logo.jsx';

import './index.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return <div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <Button title="So funktioniert's" className="navbar__item"/>
                    <Button title="Unser Sortiment"  className="item"/>
                    <Logo title=""  className="item" />
                    <Button title="Unsere App"  className="item"/>
                    <Button title="Häufige Fragen"  className="item"/>
                </ul>
            </nav>
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)