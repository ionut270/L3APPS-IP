import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import AuthServices from "../../services/AuthService";

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false,
            profile: {
                firstName: localStorage.getItem("firstName"),
                lastName: localStorage.getItem("lastName"),
                userId: localStorage.getItem("userId")
            }
        };
    }

    handleLogoutClick = () => {
        const Auth = new AuthServices();
        Auth.logout().then(() => {
            this.setState({ logout: true });
        });
    };

    redirectToTarget = target => {
        return <Redirect to={target} />;
    };

    render() {
        const { firstName, lastName } = this.state.profile;
        return (
            <div className="header__component">
                <div className="header__component-logo">
                    <i className="map pin inverted white icon" />
                    event<span>Hooks</span>
                </div>
                <div className="header__component-profile">
                    <div className="header__component-username">
                        {lastName.concat(" ", firstName)}
                    </div>
                    <span className="header__component-icon">
                        <i className="user circle icon" />
                    </span>
                    <div className="header__component-delimiter">|</div>
                    <div
                        className="header__component-logout"
                        onClick={this.handleLogoutClick}
                    >
                        Logout
                    </div>
                </div>
                {this.state.logout ? this.redirectToTarget("/login") : ""}
            </div>
        );
    }
}
