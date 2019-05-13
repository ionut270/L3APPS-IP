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
            confirmpassword: ""
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
                <div class="outer-div">
                    <div class="inner-div" />
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
                                    value={this.state.confirmPassword}
                                    onChange={e => {
                                        this.setState({
                                            confirmPassword: e.target.value
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
                                            console.log(JSON.stringify(myJson));
                                        });
                                    this.redirectToLogin();
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
