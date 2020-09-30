// SearchBar.js

import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return(
            <div className="searchBar">
                <form>
                    <label htmlFor="comicNum">Search comic #:</label>
                    <input type="number" id="comicNum" name="comicNum" min="1" max={this.props.maxNum}></input>
                </form>
                <button type="button">Recently Viewed</button>
            </div>
        );
    }
}

export default SearchBar;