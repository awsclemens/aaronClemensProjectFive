// RecentlyViewed.js

import React, { Component } from 'react';

class RecentlyViewed extends Component {
    handleClick = () => {
        console.log('clicked');
        const recentList = document.getElementsByClassName('recentlyViewed');
        const screenDark = document.getElementsByClassName('screenDark');
        recentList[0].style.right = '-100%';
        screenDark[0].style.left = '-100%';
    }

    render(){
        return(
            <React.Fragment>
                <aside className={'recentlyViewed'}>
                    <button className={'closeList'} aria-label={'Close recently viewed list'} onClick={this.handleClick}>X</button>
                    <h2>Recently Viewed</h2>
                    <ol className={'recentList'}>
                        {this.props.recentList.map((comic) => {
                            return (
                            <li>{`${comic.recentComic.title} - `}<span>{`comic#${comic.recentComic.num}`}</span></li>
                            );
                        })}
                    </ol>
                </aside>
                <div className={'screenDark'}></div>
            </React.Fragment>
        );
    }
}

export default RecentlyViewed;