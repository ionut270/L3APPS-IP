import React, { Component } from "react";
import { Transition } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

//reusable components
import FormField from "../reusableComponents/formField";

//services
import AuthService from "../../../services/AuthService";
import { handleEnterKeypres } from "../../../utils/utils";

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: false,
            signInFormVisible: true,
            signUpFormVisible: false,
            errorEmailFormat: false,
            signUpSuccessMsg: false,
            signUpErrorMsg: false,
            signInErrorMsg: false,
            successMsg: "",
            errorMsg: "",
            credentials: {
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                signUpEmail: "",
                signUpPassword: ""
            },
            fieldErrors: {
                email: false,
                password: false,
                firstName: false,
                lastName: false,
                signUpEmail: false,
                signUpPassword: false
            },
            //auth checks
            checkIfIsAuthenticated: false,
            isChecking: true
        };

        this.authService = new AuthService();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleEnterKeypresWrapper);
        //auth checks!!!
        this.authService.checkIfLoggedIn().then(rsp => {
            if (rsp) {
                this.props.history.push("/home");
            } else {
                this.props.history.push("/login");
                this.setState({ isChecking: false });
            }
        });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEnterKeypresWrapper);
    }

    handleEnterKeypresWrapper = event => {
        if (this.state.signInFormVisible === true) {
            handleEnterKeypres(event, this.onClickSignInButton);
        }
        if (this.state.signUpFormVisible === true) {
            handleEnterKeypres(event, this.onClickSignUpButton);
        }
    };

    //animation logic
    onClickSignUp = () => {
        this.setState({
            signInFormVisible: false,
            credentials: {
                ...this.state.credentials,
                email: "",
                password: ""
            },
            fieldErrors: {
                ...this.state.fieldErrors,
                email: false,
                password: false
            },
            signInErrorMsg: false
        });
    };

    onCompleteSignUp = () => {
        this.setState({
            signUpFormVisible: true
        });
    };

    onClickSignIn = () => {
        this.setState({
            signUpFormVisible: false,
            credentials: {
                ...this.state.credentials,
                signUpEmail: "",
                signUpPassword: "",
                firstName: "",
                lastName: ""
            },
            fieldErrors: {
                ...this.state.fieldErrors,
                signUpEmail: false,
                signUpPassword: false,
                firstName: false,
                lastName: false
            },
            signUpSuccessMsg: false,
            signUpErrorMsg: false
        });
    };

    onCompleteSignIn = () => {
        this.setState({
            signInFormVisible: true
        });
    };

    handleInputChange = event => {
        // Update form elements
        const field = event.target.name;
        const { credentials } = this.state;
        credentials[field] = event.target.value;
        this.setState({
            credentials
        });
        // update error messages
        const { fieldErrors } = this.state;
        fieldErrors[field] = !this.validate(field);
        this.setState({
            fieldErrors
        });
    };

    validate = formField => {
        const formFieldValue = this.state.credentials[formField];
        if (formFieldValue === "") {
            const { fieldErrors } = this.state;
            fieldErrors[formField] = true;
            if (formField === "email") {
                this.setState({
                    errorEmailFormat: false
                });
            }
            this.setState({
                fieldErrors
            });
            return false;
        }
        const { fieldErrors } = this.state;
        fieldErrors[formField] = false;
        this.setState({
            fieldErrors
        });
        return true;
    };

    validateEmail = email => {
        const emailValue = this.state.credentials[email];
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        const fine = regex.test(String(emailValue));
        if (!fine) {
            const { fieldErrors } = this.state;
            fieldErrors[email] = true;
            this.setState({
                fieldErrors,
                errorEmailFormat: true
            });
            return false;
        }
        const { fieldErrors } = this.state;
        fieldErrors[email] = false;
        this.setState({
            fieldErrors,
            errorEmailFormat: false
        });
        return true;
    };

    onClickSignInButton = () => {
        if (
            this.validate("email") &&
            this.validate("password") &&
            this.validateEmail("email")
        ) {
            const { email, password } = this.state.credentials;
            this.setState(
                {
                    showSpinner: true
                },
                () => {
                    this.authService.onSignInUser(email, password).then(
                        rsp => {
                            this.setState({
                                showSpinner: false,
                                signInErrorMsg: false,
                                checkIfIsAuthenticated: true
                            });
                        },
                        err => {
                            this.setState({
                                showSpinner: false,
                                signInErrorMsg: true,
                                errorMsg: err.message
                            });
                        }
                    );
                }
            );
        }
    };

    onClickSignUpButton = () => {
        if (
            this.validate("firstName") &&
            this.validate("lastName") &&
            this.validate("signUpEmail") &&
            this.validate("signUpPassword") &&
            this.validateEmail("signUpEmail")
        ) {
            const {
                firstName,
                lastName,
                signUpEmail,
                signUpPassword
            } = this.state.credentials;
            this.setState(
                {
                    showSpinner: true
                },
                () => {
                    this.authService
                        .onSignUpUser(
                            firstName,
                            lastName,
                            signUpEmail,
                            signUpPassword
                        )
                        .then(
                            rsp => {
                                this.setState({
                                    showSpinner: false,
                                    signUpSuccessMsg: true,
                                    signUpErrorMsg: false,
                                    successMsg: rsp.message
                                });
                            },
                            err => {
                                this.setState({
                                    showSpinner: false,
                                    signUpSuccessMsg: false,
                                    signUpErrorMsg: true,
                                    errorMsg: err.message
                                });
                            }
                        );
                }
            );
        }
    };

    onCloseSuccessMsg = () => {
        this.setState({ signUpSuccessMsg: false });
    };

    onCloseErrorMsg = () => {
        this.setState({ signUpErrorMsg: false, signInErrorMsg: false });
    };

    redirectToTarget = target => {
        return <Redirect to={target} />;
    };

    render() {
        return (
            <div className="login__container">
                {this.state.isChecking ? (
                    <div className="ui">
                        <div className="ui active inverted dimmer">
                            <div className="ui medium text loader">Loading</div>
                        </div>
                        <p />
                    </div>
                ) : (
                    <div
                        className={`formular__container ${
                            this.state.signUpFormVisible ? "sign-up-active" : ""
                        } ${
                            this.state.signUpSuccessMsg ||
                            this.state.signUpErrorMsg
                                ? "sign-with-msg"
                                : ""
                        } ${
                            this.state.signInErrorMsg
                                ? "sign-in-with-error"
                                : ""
                        }`}
                    >
                        <Transition
                            visible={this.state.signInFormVisible}
                            animation="scale"
                            duration={500}
                            onComplete={
                                this.state.signInFormVisible
                                    ? null
                                    : this.onCompleteSignUp
                            }
                        >
                            <div>
                                <span className="formular__container-title">
                                    Sign In With
                                </span>
                                <div className="formular__container-content">
                                    <FormField
                                        labelClassName="content-email"
                                        labelName="Email"
                                        errorVisible={
                                            this.state.fieldErrors.email
                                        }
                                        inputName="email"
                                        inputType="email"
                                        inputValue={
                                            this.state.credentials.email
                                        }
                                        handleInputChange={
                                            this.handleInputChange
                                        }
                                        popupVisible={
                                            this.state.fieldErrors.email
                                        }
                                        popupContent={
                                            this.state.errorEmailFormat
                                                ? "This Is Not A Valid Email"
                                                : "Email Is Required"
                                        }
                                    />
                                    <FormField
                                        labelClassName="content-password"
                                        labelName="Password"
                                        errorVisible={
                                            this.state.fieldErrors.password
                                        }
                                        inputName="password"
                                        inputType="password"
                                        inputValue={
                                            this.state.credentials.password
                                        }
                                        handleInputChange={
                                            this.handleInputChange
                                        }
                                        popupVisible={
                                            this.state.fieldErrors.password
                                        }
                                        popupContent="Password Is Required"
                                    />

                                    <div className="content-sign-in-btn">
                                        <button
                                            className="ui fluid huge black button"
                                            onClick={this.onClickSignInButton}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    {this.state.signInErrorMsg ? (
                                        <div className="ui negative message">
                                            <i
                                                className="close icon"
                                                onClick={this.onCloseErrorMsg}
                                            />
                                            <div className="small message">
                                                {this.state.errorMsg}
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div className="content-sign-up">
                                        <span>Not a member?</span>
                                        <span onClick={this.onClickSignUp}>
                                            Sign up now
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <Transition
                            visible={this.state.signUpFormVisible}
                            animation="scale"
                            duration={200}
                            onComplete={
                                this.state.signUpFormVisible
                                    ? null
                                    : this.onCompleteSignIn
                            }
                        >
                            <div>
                                <span className="formular__container-title">
                                    Sign Up With
                                </span>
                                <div className="formular__container-content">
                                    <FormField
                                        labelClassName="content-email"
                                        labelName="First Name"
                                        errorVisible={
                                            this.state.fieldErrors.firstName
                                        }
                                        inputName="firstName"
                                        inputType="text"
                                        inputValue={
                                            this.state.credentials.firstName
                                        }
                                        handleInputChange={
                                            this.handleInputChange
                                        }
                                        popupVisible={
                                            this.state.fieldErrors.firstName
                                        }
                                        popupContent="First Name Is Required"
                                    />
                                    <FormField
                                        labelClassName="content-email"
                                        labelName="Last Name"
                                        errorVisible={
                                            this.state.fieldErrors.lastName
                                        }
                                        inputName="lastName"
                                        inputType="text"
                                        inputValue={
                                            this.state.credentials.lastName
                                        }
                                        handleInputChange={
                                            this.handleInputChange
                                        }
                                        popupVisible={
                                            this.state.fieldErrors.lastName
                                        }
                                        popupContent="Last Name Is Required"
                                    />
                                    <FormField
                                        labelClassName="content-email"
                                        labelName="Email"
                                        errorVisible={
                                            this.state.fieldErrors.signUpEmail
                                        }
                                        inputName="signUpEmail"
                                        inputType="email"
                                        inputValue={
                                            this.state.credentials.signUpEmail
                                        }
                                        handleInputChange={
                                            this.handleInputChange
                                        }
                                        popupVisible={
                                            this.state.fieldErrors.signUpEmail
                                        }
                                        popupContent={
                                            this.state.errorEmailFormat
                                                ? "This Is Not A Valid Email"
                                                : "Email Is Required"
                                        }
                                    />
                                    <FormField
                                        labelClassName="content-password"
                                        labelName="Password"
                                        errorVisible={
                                            this.state.fieldErrors
                                                .signUpPassword
                                        }
                                        inputName="signUpPassword"
                                        inputType="password"
                                        inputValue={
                                            this.state.credentials
                                                .signUpPassword
                                        }
                                        handleInputChange={
                                            this.handleInputChange
                                        }
                                        popupVisible={
                                            this.state.fieldErrors
                                                .signUpPassword
                                        }
                                        popupContent="Password Is Required"
                                    />
                                    <div className="content-sign-in-btn">
                                        <button
                                            className="ui fluid huge black button"
                                            onClick={this.onClickSignUpButton}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                    {this.state.signUpSuccessMsg ? (
                                        <div className="ui success message">
                                            <i
                                                className="close icon"
                                                onClick={this.onCloseSuccessMsg}
                                            />
                                            <div className="small message">
                                                {this.state.successMsg}
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {this.state.signUpErrorMsg ? (
                                        <div className="ui negative message">
                                            <i
                                                className="close icon"
                                                onClick={this.onCloseErrorMsg}
                                            />
                                            <div className="small message">
                                                {this.state.errorMsg}
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div className="content-sign-up">
                                        <span>Sign in?</span>
                                        <span onClick={this.onClickSignIn}>
                                            Go Back
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>
                )}
                <div className="ui">
                    <div
                        className={`ui ${
                            this.state.showSpinner ? "active" : "disabled"
                        } dimmer`}
                    >
                        <div className="ui medium text loader">Loading</div>
                    </div>
                    <p />
                </div>
                {this.state.checkIfIsAuthenticated
                    ? this.redirectToTarget("/home")
                    : ""}
            </div>
        );
    }
}

export default LoginComponent;
