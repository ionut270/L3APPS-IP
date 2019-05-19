import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            sucess : true
        };
    }
    render(){
        return(
            <div className="Register_component">
            <p>Register</p>
            </div>
        )
    }
}