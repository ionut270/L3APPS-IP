import React, { Component } from 'react';
import logo from './logo.png';
import {collapse} from 'react-bootstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <body>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        
        <a className="navbar-brand" href="#Home">
                <img src={logo} alt="Logo"/>
        </a>
       
           <form className="form-inline ml-auto">
             <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
           </form>

           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
      
           


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <ul className="navbar-nav justify-content-center">
        <li className="nav-item active my-list">
          <a className="nav-link my-link" href="#home">Home</a>
        </li>
        <li className="nav-item my-list">
          <a className="nav-link my-link" href="#about">About</a>
        </li>
        <li className="nav-item my-list">
          <a className="nav-link my-link" href="#home">Ceva</a>
        </li>
        <li className="nav-item my-list">
          <a className="nav-link my-link" href="#home">Altceva</a>
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

            

          <div className="grid-container">
          <div className="grid-item">
          <h3>Tasks</h3>
          <div className="list-group">
                  <input type="checkbox" name="CheckBoxInputName" value="Value1" id="CheckBox1" />
                  <label className="list-group-item" for="CheckBox1">Task 1</label>
                  <input type="checkbox" name="CheckBoxInputName" value="Value2" id="CheckBox2" />
                  <label className="list-group-item" for="CheckBox2">Task 2</label>
                   <input type="checkbox" name="CheckBoxInputName" value="Value3" id="CheckBox3" />
                  <label className="list-group-item" for="CheckBox3">Task 3</label>
                  </div>
          </div>
          <div className="grid-item">Projects related task</div>
          <div className="grid-item">Projects</div>
          </div>

          </body>
    );
  }
}

export default App;
