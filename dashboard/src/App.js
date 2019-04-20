import React, { Component } from 'react';
/* import Meniu from './components/Meniu';
import logo from './logo.png';
import { Button } from 'react-bootstrap'; */
import logo from './logo.png';
import {collapse} from 'react-bootstrap';
import './App.css';

class App extends Component {

  render() {
    return (
       <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        
        <a className="navbar-brand" href="#Home">
                <img src={logo} alt="Logo"/>
        </a>
       
           <form className="form-inline ml-auto">
             <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
           </form>

           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
      
           


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <ul className="navbar-nav nav justify-content-center">
        <li className="nav-item active">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#home">Ceva</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#home">Altceva</a>
        </li>
        </ul>

        <div className="btn-group mybutton" role="group">
            <button type="button" className="btn navbar-btn btn-warning">
              <a href="#Add">
              <i className="glyphicon glyphicon-plus"></i>
              </a>
            </button>
            <button type="button" className="btn navbar-btn btn-warning">
            <a href="#Messages">
              <i className="glyphicon glyphicon-envelope"></i>
            </a>
            </button>
            <button type="button" className="btn navbar-btn btn-warning">
            <a href="#Profile">
            <i className="glyphicon glyphicon-user"></i>
            </a>
            </button>
          </div>

    </div>  
      </nav>



    );
  }
}

export default App;
