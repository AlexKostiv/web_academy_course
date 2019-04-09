import React from 'react';

import { Request } from '../../request';
import { Grid } from '../Grid';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }

    componentDidMount() {
        const request = new Request();
        
        request.get(
            `https://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.queryString}&client_id=0b42abb24c8adf1966a72f20f38f8d06a0f90301a82df72da8a6a70039c0f598`,
            (responseJSON) => {
                const response = JSON.parse(responseJSON);
                if (response && response.results) {
                   this.setImages(response.results)
                } else {
                    console.error('Response is empty', responseJSON);
                }
            },
            (e) => {
                throw new Error(e);
            }
        )
    }

    setImages(images) {
        this.setState({ images });
    }

    render() {
        return <Grid images={this.state.images} />
    }
}

export const t = () => {
    
}