// SearchBar.js

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value,
        })
    }

    openList = () => {
        const recentList = document.getElementsByClassName('recentlyViewed');
        const screenDark = document.getElementsByClassName('screenDark');
        recentList[0].style.right = 0;
        screenDark[0].style.left = 0;
        }

    render() {
        return(
            <div className="searchBar">
                <form id="comicNumSearch" onSubmit={(e) => {this.props.numberSearch(e, this.state.userInput)}}>
                    <label htmlFor="comicNum">Search comic #:</label>
                    <input required type="number" id="comicNum" name="comicNum" min="1" max={this.props.maxNum} onChange={this.handleChange}></input>
                </form>
                <button type="button" onClick={this.openList}>Recently Viewed</button>
            </div>
        );
    }
}

export default SearchBar;