// ButtonBar.js
import React, { Component } from 'react';

class ButtonBar extends Component {

    render(){
        const { randomComic, firstComic, latestComic, previousComic, nextComic } = this.props;

        return(
            <div className="buttonBar">
                <button onClick={randomComic}>Random</button>
                <button onClick={firstComic}>First</button>
                <button onClick={latestComic}>Latest</button>
                <button onClick={previousComic}>Prev</button>
                <button onClick={nextComic}>Next</button>
            </div>
        );
    }
}

export default ButtonBar;