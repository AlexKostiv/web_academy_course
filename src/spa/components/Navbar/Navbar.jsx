import React from 'react';
import { SearchForm } from '../SearchForm'
import './Navbar.scss';



export class Navbar extends React.Component {
	render() {
		return <nav className="nav">
			<div className="nav__content">
				<div className="nav__search-form">
					<SearchForm onSearchSucceed={this.props.onSearchSucceed}/>
				</div>
				{/* <PageMenu /> */}
			</div>
		</nav>
	}
}




