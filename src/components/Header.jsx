import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
//import faker from "faker";
import "../style/App.css";

//import CreatePlanModal from "./Comp/CreatePlanModal.js";
import CreateTaskModal from "./Comp/CreateTaskModal.js";
//import CreateSubTaskModal from "./Comp/CreateSubTaskModal.js";
//import EditPlan from "./Comp/EditPlanModal";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cookies from "universal-cookie";

export default class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    componentDidMount() {
        //console.log("Checking Auth!");
        var cookies = new Cookies();
        //console.log("invalid cookies! ", cookies.get("user_id"));
        if (
            cookies.get("user_id") === undefined ||
            cookies.get("user_id") === null ||
            cookies.get("user_id") === "" ||
            cookies.get("session_token") === undefined ||
            cookies.get("session_token") === null ||
            cookies.get("session_token") === ""
        ) {
            this.setState({
                redirect: true
            });
            //return <Redirect to="/login" />;
        } else {
            fetch(
                'http://localhost:8081/{request_tag:"check_session_token",user_id:"' +
                    cookies.get("user_id") +
                    '",session_token:"' +
                    cookies.get("session_token") +
                    '"}'
            )
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    if (res.error_code === "0") {
                        console.log("Gud session", res);
                        this.setState({
                            redirect: false
                        });
                    } else {
                        console.log("Bad session");
                        this.setState({
                            redirect: true
                        });
                    }
                });
            this.setState({
                redirect: false
            });
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/login" userInput={this.state.userInput} />;
        }
        const { activeItem } = this.state;
        return (
            <Menu size="mini" inverted className="noBorderRadius">
                <Menu.Item className="App-header">
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg"
                        className="App-logo"
                        alt="logo"
                    />
                </Menu.Item>
                {/** No search bar implemented... */}
                {/* <Menu.Menu position="left">
                    <div className="ui left aligned category search item">
                        <div className="ui transparent icon input">
                            <input className="prompt" type="text" placeholder="Search..." />
                            <i className="search link icon" />
                        </div>
                        <div className="results" />
                    </div>
                </Menu.Menu> */}
                <Menu.Item
                    name="Dashboard"
                    href="/dashboard"
                    active={activeItem === "Dashboard"}
                    onClick={() => {
                        //this.handleItemClick;
                    }}
                >
                    Dashboard
                </Menu.Item>

                <Menu.Item
                    name="Profile"
                    href="/profile"
                    active={activeItem === "Profile"}
                    onClick={this.handleItemClick}
                >
                    Profile
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <CreateTaskModal />
                    </Menu.Item>

                    <Menu.Item
                        name="Logout"
                        active={activeItem === "Logout"}
                        href="/login"
                        onClick={() => {
                            /**TODO
                             * DELETE COOKIES ON ROUTE /
                             * REDIRECT TO LOGIN
                             */
                            var cookies = new Cookies();
                            cookies.set("session_token", "", {
                                path: "/"
                            });
                            cookies = new Cookies();
                            cookies.set("user_id", "", {
                                path: "/"
                            });
                        }}
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}
