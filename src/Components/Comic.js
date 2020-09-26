// Comic.js
import React from 'react';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

// function component
const Comic = ({comicNum, title, url, transcript, year, month, day}) => {
    return(
        <div key={comicNum}>
            <h2>Latest Comic: #{comicNum}</h2>
            <p><time datetime={`${year}-${month}-${day}`}>{months[parseInt(month) - 1]} {day}, {year}</time></p>
            <h3>{title}</h3>
            <img src={url} alt={transcript}></img>
        </div>
        
    );
}

export default Comic;