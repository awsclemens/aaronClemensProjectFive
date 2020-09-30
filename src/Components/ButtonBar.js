// ButtonBar.js
import React, { Component } from 'react';

class ButtonBar extends Component {
    handleHoverOff = (e) => {
        e.target.blur();
    }

    render(){   
        const { randomComic, firstComic, latestComic, previousComic, nextComic } = this.props;

        return(
            <div className="buttonBar">
                <button type="button" className="mainFocus" onClick={randomComic} onMouseLeave={this.handleHoverOff}>Random</button>
                <button type="button"  className="mainFocus" onClick={firstComic} onMouseLeave={this.handleHoverOff}>First</button>
                <button type="button" className="mainFocus" onClick={latestComic} onMouseLeave={this.handleHoverOff}>Latest</button>
                <button type="button" className="mainFocus" onClick={previousComic} onMouseLeave={this.handleHoverOff}>Prev</button>
                <button type="button" className="mainFocus" onClick={nextComic} onMouseLeave={this.handleHoverOff}>Next</button>
            </div>
        );
    }
}

export default ButtonBar;