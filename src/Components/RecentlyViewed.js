// RecentlyViewed.js

import React, { Component } from 'react';


class RecentlyViewed extends Component { 

    // hide recently viewed list and screen dark on button click, remove its tab indexing and add back tab indexing to main focus
    handleClick = () => {
        const recentList = document.getElementsByClassName('recentlyViewed');
        const screenDark = document.getElementsByClassName('screenDark');
        const mainFocus = document.getElementsByClassName('mainFocus');
        const listFocus = document.getElementsByClassName('listFocus');
        recentList[0].style.right = '-100%';
        screenDark[0].style.left = '-100%';
        for ( let i = 0; i < mainFocus.length; i++) {
            mainFocus[i].setAttribute('tabindex', '1');
        }
        for ( let i = 0; i < listFocus.length; i++) {
            listFocus[i].setAttribute('tabindex', '-1');
        }
    }

    // allows user to click on a recently viewed comic and then hide recently viewed list and screen dark, remove its tab indexing and add back tab indexing to main focus, AND display this comic to the main page
    selectComic = (comicNum) => {
        this.props.comicSelect(`${comicNum}/`);
        this.handleClick();
    }

    render(){
        // reorder the recently viewed comics so that most recent is at the top of the list down to least recent at the bottom
        const newArray = [...this.props.recentList];
        const recentArray = [];
        for (let i = newArray.length - 1; i >= 0; i--){
            recentArray.push(newArray[i]);
        }

        return(
            <React.Fragment>
                <aside className={'recentlyViewed'}>
                    <button className={'closeList listFocus'} tabIndex={-1} aria-label={'Close recently viewed list'} onClick={this.handleClick}><i className="fas fa-times" aria-hidden="true"></i></button>
                    <h2>Recently Viewed</h2>
                    <ol className={'recentList'}>
                        {recentArray.map((comic, key) => {
                            return (
                            <li key={key}><button className={'listFocus'} onClick={() => {this.selectComic(comic.recentComic.num)}} tabIndex={-1}>{`${comic.recentComic.title} - `}<span>{`comic#${comic.recentComic.num}`}</span></button></li>
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