import React from 'react';
import Grid from './grid';
import SearchTerm from './searchterm';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }
    onSearchTermChange(term){

        console.log("search term : ", term.target.value);
        this.setState({searchTerm: term.target.value});
    }
    render() {
        const { searchTerm } = this.state;
        return (
            <div>
                <SearchTerm onChange={this.onSearchTermChange} />
                <Grid searchTerm={searchTerm} />
            </div>
        );
    }
}

export default Main;