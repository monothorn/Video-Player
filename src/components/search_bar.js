import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'Placeholder'
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.handleInputChange.bind(this)} type="text"
                />
                Value of input : {this.state.term}
            </div>
        );
    }

    handleInputChange(event) {
        this.setState({term: event.target.value});
    }
}

export default SearchBar;