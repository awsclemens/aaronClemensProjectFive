// App.js

// imports
import React, { Component } from 'react';
import firebase from './modules/firebase.js';
import axios from 'axios';
import Header from './Components/Header.js';
import RecentlyViewed from './Components/RecentlyViewed.js'
import SearchBar from './Components/SearchBar';
import ButtonBar from './Components/ButtonBar.js';
import Comic from './Components/Comic.js';
import Footer from './Components/Footer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comic: [],
      latestNum: 0,
      currentComicNum: 0,
      recentComics: [],
    }
  }

  componentDidMount = () => {
    this.loadComic('');
    // create firebase reference
    const dbRef = firebase.database().ref();
    // listen to the value change in realtime database
    dbRef.on('value', (response) => {

      const newState = [];
      const data = response.val();

      for(const key in data) {
        newState.push({
          key: key,
          recentComic: data[key]
        });
      }

      // update state with recent Comics from firebase
      this.setState({
        recentComics: newState,
      });
    });
  }

  // axios call to get xkcd comic, by specific comic number, or, if blank, the latest comic
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
      });
      if (this.state.latestNum === 0){
        this.setState({
          latestNum: currentComic[0].num,
        })
      } else {
        // only adds comic after user loads new comic, not the latest comic displayed on page load
        // if there are already 10 recent comics in state then remove 1st comic from database, before adding the current comic, always keeping 10 recent comic records
        if(this.state.recentComics.length === 10) {
          const comicRemove = this.state.recentComics[0].key;
          const dbRef = firebase.database().ref();
          dbRef.child(comicRemove).remove();
        }
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.comic[0]);
      }
    });
  }

  // search for a comic using comic number provided by user in number input
  numberSearch = (e, userInput) => {
    e.preventDefault();
    this.loadComic(`${userInput}/`);
    document.getElementById('comicNumSearch').reset();
  }

  // generate random number from 1 to latest comic number and use that random number to search for that comic
  randomComic = () => {
    const comicNum = Math.floor(Math.random() * this.state.latestNum) + 1;
    this.loadComic(`${comicNum}/`);
  }

  // using the current comic number, subtract 1 (if not the 1st comic) to search for that comic
  previousComic = () => {
    return(this.state.currentComicNum > 1 ? this.loadComic(`${this.state.currentComicNum - 1}/`) : this.loadComic('1/'));
  }

  // using the current comic number, add 1 (if not the latest comic) to search for that comic
  nextComic = () => {
    return(this.state.currentComicNum < this.state.latestNum ? this.loadComic(`${this.state.currentComicNum + 1}/`) : this.loadComic(`${this.state.latestNum}/`));
  }

  render(){
    return (
      <div className="App">
        <RecentlyViewed 
        recentList={this.state.recentComics}
        comicSelect={this.loadComic}
        />
        <Header />
        <div className="wrapper">
          <main>
            <SearchBar 
            maxNum={this.state.latestNum}
            numberSearch={this.numberSearch}
            />
            <ButtonBar
            randomComic={this.randomComic}
            firstComic={() => this.loadComic('1/')}
            latestComic={() => this.loadComic('')}
            previousComic={this.previousComic}
            nextComic={this.nextComic}
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
            randomComic={this.randomComic}
            firstComic={() => this.loadComic('1/')}
            latestComic={() => this.loadComic('')}
            previousComic={this.previousComic}
            nextComic={this.nextComic}
            />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
