// Comic.js
import React from 'react';
import months from '../modules/monthsList.js';

// Function Component
const Comic = ({latestNum, comicNum, title, url, transcript, year, month, day, bonusText}) => {
    return(
        <div className="displayComic" key={comicNum}>
            {comicNum === latestNum ? <h2>Latest Comic: #{comicNum}</h2> : <h2>Comic: #{comicNum}</h2>}
            <p><time dateTime={`${year}-${month}-${day}`}>{months[parseInt(month) - 1]} {day}, {year}</time></p>
            <h3>{title}</h3>
            <div className="imageContainer" tabIndex='0'>
                {transcript !== "" ? <img src={url} alt={transcript}></img> : <img src={url} alt="A Comic by Randall Patrick Munroe. Transcript unavailable at this time"></img> }
                <div className="overlay">
                    <p>{bonusText}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Comic;