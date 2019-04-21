//import ReactDOM from "react-dom";
// import logo from './logo.svg';
// import './App.css';
// import clock from './clock.png';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import View from './ViewComponent';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";

export default class App extends Component {
  render(){
    return (
        <div>
          <Layout/>
        </div>
    );
  }
}
