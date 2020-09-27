// ButtonBar.js
import React, { Component } from 'react';

class ButtonBar extends Component {



    render(){
        const { loadFirstComic } = this.props
        return(
            <div className="buttonBar">
                <button>Random</button>
                <button onClick={loadFirstComic}>First</button>
                <button>Latest</button>
                <button>Prev</button>
                <button>Next</button>
            </div>
        );
    }
}

export default ButtonBar;