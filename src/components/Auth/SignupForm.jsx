import React, { Component } from "react";
import { Button, Checkbox, Form, Grid, Icon } from "semantic-ui-react";
import "./Auth.css";
import axios from "axios";

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
            errorMSG: ""
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
                <Grid centered style={styles.root}>
                    <Grid.Column className="my-form">
                        <h2>Register</h2>
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
                                <label className="my-label">
                                    Confirm Password
                                </label>
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
                            <Form.Field required>
                                <Checkbox
                                    className="my-label"
                                    label="I agree to the Terms and Conditions"
                                />
                            </Form.Field>
                            <Button
                                fluid
                                type="submit"
                                onClick={() => {
                                    if (
                                        this.state.confirmpassword ===
                                        this.state.password
                                    ) {
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
                                            .then(function(myJson) {
                                                console.log(
                                                    JSON.stringify(myJson)
                                                );
                                                if (myJson.error_code === 3) {
                                                    this.state.errorMSG =
                                                        myJson.execution_message;
                                                }
                                                console.log(
                                                    myJson.execution_message
                                                );
                                            });
                                        this.redirectToLogin();
                                    } else {
                                        console.log(
                                            this.state.password,
                                            "=",
                                            this.state.confirmpassword
                                        );
                                        //enable error mesage
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
