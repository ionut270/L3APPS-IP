import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import clock from './clock.png';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import View from './ViewComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <script src="./functions.js"></script>
        <h2>Project_title</h2>
        <h1>Sprints</h1>
        <div className="grid-container">
          <img src={clock} className="Clock" alt="clock" height="40em" weight="40em" onClick="clockDropdown()" />
          <div className="smallFont">Current sprint</div>
          <div className="bigFont">Sprint_name</div>
        </div>
        <p2 id="duedate"></p2>
        <div className="EndedSprints">
          <i className="arrow right"></i>
          <p>Ended sprints</p>
        </div>
      </div>
    );
  }
}

export default App;
