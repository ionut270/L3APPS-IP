import React, { Component } from "react";
import { Icon, Menu, Dropdown, Image, Input } from "semantic-ui-react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import faker from "faker";
import "../style/App.css";

import CreatePlanModal from "./Comp/CreatePlanModal.js";
import CreateTaskModal from "./Comp/CreateTaskModal.js";
import CreateSubTaskModal from "./Comp/CreateSubTaskModal.js";
import EditPlan from "./Comp/EditPlanModal";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cookies from "universal-cookie";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    componentDidMount() {
        var cookies = new Cookies();
        console.log(cookies.get());
    }
    render() {
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
                    <Menu.Item
                        name="Add"
                        active={activeItem === "Add"}
                        onClick={this.handleItemClick}
                    >
                        <Dropdown icon="add large">
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <CreateTaskModal />
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <CreateSubTaskModal />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
