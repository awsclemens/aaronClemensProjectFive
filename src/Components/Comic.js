// Comic.js
import React,{ Component } from 'react';
import months from '../modules/monthsList.js';

class Comic  extends Component {

    // display overlay with its bonus text on mouse click
    handleClick() {
        const overlay = document.getElementsByClassName('overlay');
        console.log(overlay[0].style.display);
        return(overlay[0].style.display === "" ? overlay[0].style.display = "block" : overlay[0].style.display = "");
    }

    // display overlay with its bonus text on "Enter" key, accessibilty
    handleEnter(e) {
        if(e.key === 'Enter') {
            const overlay = document.getElementsByClassName('overlay');
            console.log(overlay[0].style.display);
            return(overlay[0].style.display === "" ? overlay[0].style.display = "block" : overlay[0].style.display = "");
        }
    }

    render(){
        const {latestNum, comicNum, title, url, transcript, year, month, day, bonusText} = this.props
        return(
            <div className="displayComic" key={comicNum}>
                {comicNum === latestNum ? <h2>Latest Comic: #{comicNum}</h2> : <h2>Comic: #{comicNum}</h2>}
                <p><time dateTime={`${year}-${month}-${day}`}>{months[parseInt(month) - 1]} {day}, {year}</time></p>
                <h3>{title}</h3>
                <div className="imageContainer mainFocus" tabIndex='1' onClick={this.handleClick} onKeyPress={this.handleEnter}>
                    {transcript !== "" ? <img src={url} alt={transcript}></img> : <img src={url} alt="A Comic by Randall Patrick Munroe. Transcript unavailable at this time"></img> }
                    <div className="overlay">
                        <p>{bonusText}</p>
                    </div>
                </div>
            </div>
            
        );
    }
} 

export default Comic;