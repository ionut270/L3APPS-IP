import React, { Component } from "react";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import "./Auth.css";
import Cookies from "universal-cookie";

const styles = {
    root: {
        marginTop: "5%"
    }
};

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            error: ""
        };
    }
    redirectToSignUp = () => {
        this.props.history.push(`/register`);
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
                        <h2 className="orangeUnderscoreLoginText">Log in</h2>
                        <Form>
                            <Form.Field required>
                                <label className="my-label">Email</label>
                                <input
                                    value={this.state.email}
                                    onChange={e => {
                                        this.setState({
                                            email: e.target.value
                                        });
                                    }}
                                    type="text"
                                    placeholder="Email here..."
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label className="my-label">Password</label>
                                <input
                                    value={this.state.password}
                                    onChange={e => {
                                        this.setState({
                                            password: e.target.value
                                        });
                                    }}
                                    type="password"
                                    placeholder="Password here..."
                                />
                            </Form.Field>
                            {/* <Form.Field>
                                <Checkbox
                                    className="my-label"
                                    label="I forgot my password"
                                    onClick={() => {
                                        //redirect user to new page
                                    }}
                                />
                            </Form.Field> */}
                            <Form.Field>
                                <Checkbox
                                    className="my-label"
                                    label="New user, click here"
                                    onClick={() => {
                                        this.redirectToSignUp();
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label className="my-label red ">{this.state.error}</label>
                            </Form.Field>
                            <Button
                                fluid
                                type="submit"
                                onClick={() => {
                                    //request with data
                                    console.log(this.state);
                                    fetch(
                                        "http://18.220.57.109:8090/%7Brequest_tag:%22login%22,%20email:%20%22" +
                                            this.state.email +
                                            "%22,%20password:%20%22" +
                                            this.state.password +
                                            "%22%7D"
                                    )
                                        .then(function(res) {
                                            console.log(res);
                                            return res.json();
                                        })
                                        .then(function(data) {
                                            console.log("Data is", data);
                                            if (data.execution_message === "Succes") {
                                                console.log("SETTING UP COOKIES!");
                                                var cookies = new Cookies();
                                                cookies.set("session_token", data.session_token, {
                                                    path: "/"
                                                });
                                                cookies = new Cookies();
                                                cookies.set("user_id", data.user_id, {
                                                    path: "/"
                                                });
                                                console.log("DONE!");
                                            } else {
                                                //console.log("console.log", this.state);
                                                //this.state.error = data.execution_message;
                                                //this.setState = { error: data.execution_message };
                                                //this.forceUpdate();
                                                return data;
                                            }
                                        })
                                        .then(res => {
                                            //console.log(res.execution_message);
                                            console.log(res);
                                            if (
                                                res === undefined ||
                                                res.execution_message === undefined
                                            ) {
                                                this.redirectToProfile();
                                            } else {
                                                console.log("BAD");
                                                this.state.error =
                                                    "Email or password dosen't exists";
                                                this.forceUpdate();
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        });
                                }}
                            >
                                Sign in
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
