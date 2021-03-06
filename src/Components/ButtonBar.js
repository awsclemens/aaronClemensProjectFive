// ButtonBar.js
import React, { Component } from 'react';


class ButtonBar extends Component {
    // remove focus( and therefore hover effect) from button after clicking (it would normally persist)
    handleHoverOff = (e) => {
        e.target.blur();
    }

    render(){   
        const { randomComic, firstComic, latestComic, previousComic, nextComic } = this.props;

        return(
            <div className="buttonBar">
                <button type="button" tabIndex='1' className="mainFocus" onClick={randomComic} onMouseLeave={this.handleHoverOff}>Random</button>
                <button type="button" tabIndex='1'  className="mainFocus" onClick={firstComic} onMouseLeave={this.handleHoverOff}>First</button>
                <button type="button" tabIndex='1' className="mainFocus" onClick={latestComic} onMouseLeave={this.handleHoverOff}>Latest</button>
                <button type="button" tabIndex='1' className="mainFocus" onClick={previousComic} onMouseLeave={this.handleHoverOff}>Prev</button>
                <button type="button" tabIndex='1' className="mainFocus" onClick={nextComic} onMouseLeave={this.handleHoverOff}>Next</button>
            </div>
        );
    }
}

export default ButtonBar;