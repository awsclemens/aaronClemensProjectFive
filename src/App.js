// App.js

// imports
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header.js';
import Comic from './Components/Comic.js'
import Footer from './Components/Footer.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comic: [],
    }
  }

  componentDidMount(){
    // make api call, using juno proxy, to get latest comic
    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: 'http://xkcd.com/info.0.json',
        xmlToJSON: false,
        useCache: false
      }
    }).then((response) => {
      const latestComic = [];
      latestComic.push(response.data);

      // update state
      this.setState({
        comic: latestComic,
      });
      console.log(this.state.comic);
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <main>
            {this.state.comic.map((comic) => {
              return (
                <Comic 
                key={comic.num}
                comicNum={comic.num}
                title={comic.title}
                url={comic.img}
                transcript={comic.transcript}
                year={comic.year}
                month={comic.month}
                day={comic.day}
                />
              )
            })}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
