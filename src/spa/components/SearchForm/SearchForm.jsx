import React from 'react';
import {Request} from '../../request';
import './SearchForm.scss';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            searchValue: ''
        }
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const searchRequest = new Request();
        searchRequest.get(
            `https:api.unsplash.com/search/photos?page=1&query=${this.state.searchValue}&client_id=9f3b98fc3c8dd41d1149ab8017e9b57a1d9fed9091e2b1356655d910baf421e9`,
            (response) => {
                console.log('>>>>RESPONSE FROM SEARCH', JSON.parse(response).results);
                this.props.onSearchSucceed(JSON.parse(response).results);
            }
        );

    }

    onChange(e) {
        const searchValue = e.currentTarget.value;
        this.setState({searchValue})
    }

    render() {
        const className = this.props.className || '';

        return <form className={className + " search-form"} onSubmit={this.submitForm}>
            <button className="search-form__button">S</button>
            <input
                type="text"
                className="search-form__input"
                onChange={this.onChange}
                value={this.state.searchValue}
                placeholder="Search..."/>
        </form>
    }
}
