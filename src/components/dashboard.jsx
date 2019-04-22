import React, { Component } from "react";
import Login from "./Auth/login";
import Register from "./Auth/register";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Dashboard_component">
        <p>Dashboard!</p>
      </div>
    );
  }
}
