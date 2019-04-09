import React from 'react';
import { Request } from '../../request';
import { Grid } from '../Grid';

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
        this.setState({ images });
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        const request = new Request();
        request.get(
            `https://api.unsplash.com/photos?page=${this.state.currentPage}`,
            (imagesJSON) => {
                const images = this.state.images.concat(JSON.parse(imagesJSON))
                this.setImages(images);
            },
            (e) => {
                console.log(e);
            },
            { 'Authorization': 'Client-ID 0b42abb24c8adf1966a72f20f38f8d06a0f90301a82df72da8a6a70039c0f598' })
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

    searchHandler(images) {
        console.log('>>>RESPONSE FROM SEACR', images);
        // this.setState
        this.setImages(images);
    }

    render() {
        return <div>
            <div>
                <Grid images={this.state.images} />
            </div>
            <button onClick={this.nextImages}>Next</button>
        </div>
    }
}