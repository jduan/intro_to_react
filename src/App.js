import React, { Component } from 'react';
import Hello from './Hello';
import Episode from './Episodes';
import logo from './logo.svg';
import incredibles2 from './incredibles2.jpg';
import './App.css';
import episodes from './episodes.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={incredibles2} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name={"Jingjing"}/>
        <Episode episodes={episodes}/>
      </div>
    );
  }
}

export default App;
