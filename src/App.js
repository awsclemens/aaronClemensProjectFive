// App.js

// imports
import React, { Component } from 'react';
import getLatestComic from './modules/getLatestComic.js'
import getFirstComic from './modules/getFirstComic.js'
import Header from './Components/Header.js';
import ButtonBar from './Components/ButtonBar.js'
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
    getLatestComic.then((response) => {
      const latestComic = [];
      latestComic.push(response.data);
      // update state
      this.setState({
        comic: latestComic,
      });
      console.log('initial comic', this.state.comic);
    });
  }

  loadFirstComic = () => {
    getFirstComic.then((response) => {
      const firstComic = [];
      firstComic.push(response.data);
      // update state
      this.setState({
        comic: firstComic,
      })
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <main>
            <ButtonBar loadFirstComic={this.loadFirstComic}/>
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
            <ButtonBar />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
