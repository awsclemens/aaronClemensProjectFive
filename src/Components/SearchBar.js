// SearchBar.js
import React, { Component } from 'react';
import hideShow from '../modules/hideShow.js'

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
        }
    }

    // set the state with all changes to user input in the number input box
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value,
        })
    }

    // allows user to click on a "Recently Viewed" button and then remove main page tab indexing and add tab indexing to list focus, AND slide out the screen dark and recentlyViewed list on top of the main page.
    openList = () => {
        // opens the recently view comics list
        hideShow();
        // remove tab indexing from main focus
        const mainFocus = document.getElementsByClassName('mainFocus');
        const listFocus = document.getElementsByClassName('listFocus');
        for ( let i = 0; i < mainFocus.length; i++) {
            mainFocus[i].setAttribute('tabindex', '-1');
        }
        // add tab indexing to list focus
        for ( let i = 0; i < listFocus.length; i++) {
            listFocus[i].setAttribute('tabindex', '1');
        }
    }

    render() {
        return(
            <div className="searchBar">
                <form id="comicNumSearch" onSubmit={(e) => {this.props.numberSearch(e, this.state.userInput)}}>
                    <label htmlFor="comicNum">Search comic #:</label>
                    <input required type="number" tabIndex='1' className="mainFocus" id="comicNum" name="comicNum" min="1" max={this.props.maxNum} onChange={this.handleChange}></input>
                </form>
                <button type="button" tabIndex='1' className="mainFocus" onClick={this.openList}>Recently Viewed</button>
            </div>
        );
    }
}

export default SearchBar;