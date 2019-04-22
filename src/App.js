import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import './style/App.css';

/** */
import Auth from "./components/auth";
import Dashboard from "./components/dashboard"
import Plan from "./components/View/plan";
import Task from "./components/View/task";
import Subtask from "./components/View/subtask";
import Profile from "./components/View/profile";
/** */

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuth:true
    }
  }
  render() {
    console.log("State is ",this.state);
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Auth} value = {this.state.isAuth} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/plan" component={Plan} />
          <Route path="/task" component={Task} />
          <Route path="/subtask" component={Subtask} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}
