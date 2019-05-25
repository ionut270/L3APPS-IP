import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Auth/LoginForm.jsx";
import Register from "./components/Auth/SignupForm.jsx";
import Dashboard from "./components/dashboard";
import Task from "./components/View/task";
import Profile from "./components/View/Profile";
// import Underlings from "./components/View/Underlings.js";
import MyTasks from "./components/Dashboard/My_tasks.jsx";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuth: true
        };
    }
    render() {
        console.log("State is ", this.state);
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/task" component={Task} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/My tasks" component={MyTasks} />
                    {/* <Route path="/underling" component={Underlings} /> */}
                </div>
            </BrowserRouter>
        );
    }
}
