import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

function OnSucess(props){
    if(props.value.sucess){
        return (<Redirect to="/dashboard"></Redirect>)
    } else {
        return (<p>No no no ...</p>)
    }
}

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sucess : true,
        };
      }
    render(){
        return(
            <div className="login_component">
            <p>Login</p>
            <OnSucess value={this.state}></OnSucess>
            </div>
        )
    }
}