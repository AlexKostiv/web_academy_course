import {Request} from "../../request";
import React from 'react';

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			currentPage: 1
		};
		this.nextImages = this.nextImages.bind(this);
		this.searchHandler = this.searchHandler.bind(this);
	}

	setImages(images) {
		this.setState({images});

	}

	componentDidMount() {
		this.fetchImages();
	}

	fetchImages() {
		//console.log(this.state.currentPage);
		const request = new Request();
		request.get(
			`https://api.unsplash.com/photos?page=${this.state.currentPage}`,
			(imagesJSON) => {
				const images = this.state.images.concat(JSON.parse(imagesJSON));
				this.setImages(images);
			},
			(e) => {
				console.log(e);
			},
			{ 'Authorization': 'Client-ID 9f3b98fc3c8dd41d1149ab8017e9b57a1d9fed9091e2b1356655d910baf421e9'})
	}

	nextImages() {
		this.setState(
			(state) => {
				const newState = Object.assign(state);
				newState.currentPage++;
				return newState;
			}, () => {
				this.fetchImages();
			});
	}

	renderImages() {
		return this.state.images.map(image => {
			return <img src={`${image.urls.small}`} />;
		});
	}

	searchHandler(images) {
		console.log('======', images);
		this.setImages(images);

	}

	render() {
		return <div>
			<div>
				{this.renderImages()}
			</div>
			<button onClick={this.nextImages}>Add</button>
		</div>
	}
}