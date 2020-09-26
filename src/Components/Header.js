// Header.js
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="flexContainer">
                    <h1>xkcd</h1>
                    <p>comics by: <a href="https://twitter.com/xkcd?lang=en" target="_blank" rel="noopener">Randall Patrick Munroe</a></p>
                </header>
            </div>
        );
    }
}

export default Header;