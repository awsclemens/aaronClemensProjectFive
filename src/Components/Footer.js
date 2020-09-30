import React, { Component } from 'react';

class Footer extends Component {
    handleHoverOff = (e) => {
        e.target.blur();
    }

    render(){
        return(
            <div className="wrapper">
                <footer>
                    <p>
                        © 2020 
                        <a 
                        className={'mainFocus'}
                        onMouseLeave={this.handleHoverOff}
                        href="https://github.com/awsclemens" 
                        target="_blank" 
                        rel="noopener noreferrer"> Aaron W.S. Clemens 
                        </a> || 
                        <a 
                        className={'mainFocus'}
                        onMouseLeave={this.handleHoverOff}
                        href="https://junocollege.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"> Juno College
                        </a>
                    </p>
                </footer>
                
            </div>
        );
    }
}

export default Footer;