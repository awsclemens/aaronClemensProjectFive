// App.js

// imports
import React, { Component } from 'react';
import axios from 'axios';
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
      latestNum: 0,
      currentComicNum: 0,
    }
  }

  componentDidMount= () => {
    this.loadComic('');
  }
  
  loadComic = (comicNum) => {
    axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
          reqUrl: `https://xkcd.com/${comicNum}info.0.json`,
          xmlToJSON: false,
          useCache: false
      }
    }).then((response) => {
      const currentComic = [];
      currentComic.push(response.data);
      // update state
      this.setState({
        comic: currentComic,
        currentComicNum: currentComic[0].num,
        // latestNum: currentComic[0].num,
      });
      if (this.state.latestNum === 0){
        this.setState({
          latestNum: currentComic[0].num,
        })
      };
      console.log('current comic', this.state.comic);
      console.log('current comic #:',this.state.currentComicNum);
      console.log('latest num: ',this.state.latestNum);
    });
  }

  randomComic = () => {
    const comicNum = Math.floor(Math.random() * this.state.latestNum) + 1;
    return (`${comicNum}/`);
  }

  previousComic = () => {
    return(this.state.currentComicNum > 1 ? `${this.state.currentComicNum - 1}/` : '1/');
  }

  nextComic = () => {
    return(this.state.currentComicNum < this.state.latestNum ? `${this.state.currentComicNum + 1}/` : `${this.state.latestNum}/`);
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <main>
            <ButtonBar
            randomComic={() => this.loadComic(this.randomComic())}
            firstComic={() => this.loadComic('1/')}
            latestComic={() => this.loadComic('')}
            previousComic={() => this.loadComic(this.previousComic())}
            nextComic={() => this.loadComic(this.nextComic())}
            />
            {this.state.comic.map((comic) => {
              return (
                <Comic 
                key={comic.num}
                latestNum={this.state.latestNum}
                comicNum={comic.num}
                title={comic.title}
                url={comic.img}
                transcript={comic.transcript}
                year={comic.year}
                month={comic.month}
                day={comic.day}
                bonusText={comic.alt}
                />
              )
            })}
            <ButtonBar
            randomComic={() => this.loadComic(this.randomComic())}
            firstComic={() => this.loadComic('1/')}
            latestComic={() => this.loadComic('')}
            previousComic={() => this.loadComic(this.previousComic())}
            nextComic={() => this.loadComic(this.nextComic())}
            />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
