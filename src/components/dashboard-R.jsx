import React, { Component } from "react";
/* import Meniu from './components/Meniu';
import logo from './logo.png';*/
import { Button } from "react-bootstrap";
import logo from "../style/Dashboard/logo.png";
import { collapse } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../style/Dashboard/App.css";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard_container">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                    <a className="navbar-brand" href="#Home">
                        <img src={logo} alt="Logo" />
                    </a>

                    <form className="form-inline ml-auto">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item active my-list">
                                <a className="nav-link my-link" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item my-list">
                                <a className="nav-link my-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item my-list">
                                <a className="nav-link my-link" href="#home">
                                    Ceva
                                </a>
                            </li>
                            <li className="nav-item my-list">
                                <a className="nav-link my-link" href="#home">
                                    Altceva
                                </a>
                            </li>
                        </ul>

                        <div className="btn-group mybutton" role="group">
                            <button
                                type="button"
                                className="btn navbar-btn btn-warning"
                            >
                                <a href="#Add">
                                    <i className="glyphicon glyphicon-plus" />
                                </a>
                            </button>
                            <button
                                type="button"
                                className="btn navbar-btn btn-warning"
                            >
                                <a href="#Messages">
                                    <i className="glyphicon glyphicon-envelope" />
                                </a>
                            </button>
                            <button
                                type="button"
                                className="btn navbar-btn btn-warning"
                            >
                                <Link to="/profile">
                                    <i className="glyphicon glyphicon-user" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="container my-container">
                    <div className="row justify-content-around my row">
                        <div className="col-4 my-col">
                            <h2>Today</h2>

                            <div class="list-group">
                                <a
                                    href="#"
                                    class="list-group-item list-group-item-action active"
                                >
                                    Nume task{" "}
                                </a>
                                <a
                                    href="#"
                                    class="list-group-item list-group-item-action"
                                >
                                    Nume task
                                </a>
                                <a
                                    href="#"
                                    class="list-group-item list-group-item-action"
                                >
                                    Nume task
                                </a>
                                <a
                                    href="#"
                                    class="list-group-item list-group-item-action"
                                >
                                    Nume task
                                </a>
                                <a
                                    href="#"
                                    class="list-group-item list-group-item-action disabled"
                                >
                                    Nume task
                                </a>
                            </div>
                        </div>
                        <div className="col-4 my-col">
                            <h2>Projects related tasks</h2>
                        </div>
                        <div className="col-4 my-col">
                            <h2>Projects</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
