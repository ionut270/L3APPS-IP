import React, { Component } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import "./Auth.css";
//import axios from "axios";

const styles = {
    root: {
        marginTop: "5%"
    }
};

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmpassword: "",
            error: {
                confirmpassword: false,
                password: false,
                email: false
            },
            errorMSG: "",
            loading: false,
            buttonColor: "orange"
        };
    }
    redirectToLogin = () => {
        this.props.history.push(`/login`);
    };
    redirectToProfile = () => {
        this.props.history.push(`/profile`);
    };
    render() {
        return (
            <div className="form-container">
                <div className="outer-div">
                    <div className="inner-div" />
                </div>
                <Grid className="LoginLogoFlexGrid" centered style={styles.root}>
                    <div className="loginLogo">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg"
                            className="App-logo loginlogo"
                            alt="logo"
                        />
                    </div>
                    <Grid.Column className="my-form">
                        <h2 className="orangeUnderscoreLoginText">Register</h2>
                        <Form method="POST" name="LOGIN">
                            <Form.Field required>
                                <label className="my-label">Name</label>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={e => {
                                        this.setState({
                                            name: e.target.value
                                        });
                                    }}
                                    placeholder="Username here..."
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label className="my-label">Surname</label>
                                <input
                                    type="text"
                                    value={this.state.surname}
                                    onChange={e => {
                                        this.setState({
                                            surname: e.target.value
                                        });
                                    }}
                                    placeholder="Username here..."
                                />
                            </Form.Field>

                            <Form.Field required>
                                <label className="my-label">Email</label>
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={e => {
                                        this.setState({
                                            email: e.target.value
                                        });
                                    }}
                                    placeholder="Email here..."
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label className="my-label">Password</label>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={e => {
                                        this.setState({
                                            password: e.target.value
                                        });
                                    }}
                                    placeholder="Password here..."
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label className="my-label">Confirm Password</label>
                                <input
                                    type="password"
                                    value={this.state.confirmpassword}
                                    onChange={e => {
                                        this.setState({
                                            confirmpassword: e.target.value
                                        });
                                    }}
                                    placeholder="Confirm Password here..."
                                />
                            </Form.Field>
                            {/* <Form.Field required>
                                <Checkbox
                                    className="my-label"
                                    label="I agree to the Terms and Conditions"
                                />
                            </Form.Field> */}
                            <Form.Field>
                                <label className="my-label">{this.state.errorMSG}</label>
                            </Form.Field>
                            <Button
                                loading={this.state.loading}
                                color={this.state.buttonColor}
                                fluid
                                type="submit"
                                onClick={() => {
                                    console.log(
                                        this.state.email,
                                        this.state.name,
                                        this.state.password,
                                        this.state.surname
                                    );
                                    if (
                                        this.state.email !== "" &&
                                        this.state.name !== "" &&
                                        this.state.password !== "" &&
                                        this.state.surname !== ""
                                    ) {
                                        if (this.state.confirmpassword === this.state.password) {
                                            this.setState({
                                                loading: true,
                                                buttonColor: "gray"
                                            });
                                            this.forceUpdate();
                                            fetch(
                                                "http://localhost:8081/%7Brequest_tag:%22signup%22,email:%22" +
                                                    this.state.email +
                                                    "%22,password:%22" +
                                                    this.state.password +
                                                    "%22,first_name:%22" +
                                                    this.state.name +
                                                    "%22,last_name:%22" +
                                                    this.state.surname +
                                                    "%22%7D"
                                            )
                                                .then(function(response) {
                                                    return response.json();
                                                })
                                                .then(res => {
                                                    console.log("err code is ", res.error_code);
                                                    if (res.error_code === "0") {
                                                        this.redirectToLogin();
                                                    } else {
                                                        console.log("Eroor");
                                                        this.setState({
                                                            errorMSG: res.execution_message,
                                                            loading: false,
                                                            buttonColor: "orange"
                                                        });
                                                        this.forceUpdate();
                                                    }
                                                })
                                                .catch(err => {
                                                    this.setState({
                                                        errorMSG: "CROSS ORIGIN ACESS FAILED",
                                                        loading: false,
                                                        buttonColor: "orange"
                                                    });
                                                    // this.state.error = "CROSS ORIGIN ACESS FAILED";
                                                    this.forceUpdate();
                                                });
                                        } else {
                                            this.setState({
                                                errorMSG: "Passwords don't match!",
                                                loading: false,
                                                buttonColor: "orange"
                                            });
                                            this.forceUpdate();
                                        }
                                    } else {
                                        this.setState({
                                            errorMSG: "Please fill all the fields !",
                                            loading: false,
                                            buttonColor: "orange"
                                        });
                                        this.forceUpdate();
                                    }
                                }}
                            >
                                Sign up
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
