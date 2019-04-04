import React from 'react';
import { Request } from '../../request'

export class Search extends React.Component {
	componentDidMount(){
		const request = new Request();
		request.get(
			`https:api.unsplash.com/search/photos?page=1&query=${this.props.match.params.queryString}&client_id=9f3b98fc3c8dd41d1149ab8017e9b57a1d9fed9091e2b1356655d910baf421e9`,
			(responseJSON) => {
				const response = JSON.parse(responseJSON);
				if (response && response.results) {
					console.log(response);
				} else {
					console.error('Response is empty', responseJSON)
				}
			},
			(e) => {
				throw new Error(e);
			}
		);
	}
	render(){
		return <h2>Search page</h2>
	}
}

export const t= () => {

}
