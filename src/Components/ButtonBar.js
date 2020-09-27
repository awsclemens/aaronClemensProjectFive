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
                <button onClick={randomComic} onMouseLeave={this.handleHoverOff}>Random</button>
                <button onClick={firstComic} onMouseLeave={this.handleHoverOff}>First</button>
                <button onClick={latestComic} onMouseLeave={this.handleHoverOff}>Latest</button>
                <button onClick={previousComic} onMouseLeave={this.handleHoverOff}>Prev</button>
                <button onClick={nextComic} onMouseLeave={this.handleHoverOff}>Next</button>
            </div>
        );
    }
}

export default ButtonBar;