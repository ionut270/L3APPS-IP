import React, { Component } from "react";
import Login from "./Auth/login";
import Register from "./Auth/register";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

function HasAccount(props) {
  if (props.value.login) {
    return <Login />;
  } else {
    return <Register />;
  }
}

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }
  render() {
    return (
      <div className="Auth_component">
        <HasAccount value={this.state}></HasAccount>
      </div>
    );
  }
}
