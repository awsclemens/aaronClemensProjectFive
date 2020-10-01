// Header.js
import React, { Component } from 'react';

class Header extends Component {
    // remove focus( and therefore hover effect) from links after clicking (it would normally persist)
    handleHoverOff = (e) => {
        e.target.blur();
    }

    render() {
        return (
            <div className="wrapper">
                <header className="flexContainer">
                    <h1>xkcd</h1>
                    <p>comics by: <a className={'mainFocus'} onMouseLeave={this.handleHoverOff} href="https://twitter.com/xkcd?lang=en" target="_blank" rel="noopener noreferrer">Randall Patrick Munroe</a></p>
                </header>
            </div>
        );
    }
}

export default Header;