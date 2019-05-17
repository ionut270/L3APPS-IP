import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "../Auth old/pages/SignUpForm";
import SignInForm from "../Auth old/pages/SignInForm";

import "../../style/Auth/App.css";

class Auth extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        if (this.props.location.pathname !== "/auth") {
            return null;
        }
        return (
        <Router basename="/react-auth-ui/">
            <div className="App-auth">
                <div className="App-auth__Form">
                    <div className="PageSwitcher">
                        <NavLink
                            to="/sign-in"
                            activeClassName="PageSwitcher__Item--Active"
                            className="PageSwitcher__Item"
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="PageSwitcher__Item--Active"
                            className="PageSwitcher__Item"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                    <div className="FormTitle">
                        <NavLink
                            to="/sign-in"
                            activeClassName="FormTitle__Link--Active"
                            className="FormTitle__Link"
                        >
                            Sign In
                        </NavLink>{" "}
                        or{" "}
                        <NavLink
                            exact
                            to="/"
                            activeClassName="FormTitle__Link--Active"
                            className="FormTitle__Link"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                    <Route exact path="/" component={SignUpForm} />
                    <Route path="/sign-in" component={SignInForm} />
                </div>
            </div>
        </Router>
        );
    }
}

export default Auth;
