import React from 'react';
import { Navbar } from './components/Navbar';
import { Request } from './request';

export class App extends React.Component {
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
        const newInmage = this.state.images.concat(images);
        this.setState({images: newInmage});

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
                this.setImages(JSON.parse(imagesJSON));
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

    searchHandler(response) {
        this.setImages((response));
        console.log('======', response);
    }

    render() {
        return <div>
            <Navbar onSearchSucceed={this.searchHandler}/>
            <div>
                {this.renderImages()}
            </div>
            <button onClick={this.nextImages}>Add</button>
        </div>
    }
}


