import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { Redirect } from "react-router-dom";

export default class WithAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
      isLogged: true
    };
  }

  componentDidMount() {
    const Auth = new AuthService();
    Auth.checkIfLoggedIn().then(rsp => {
      if (!rsp) {
        this.setState({ showSpinner: false, isLogged: false });
      } else {
        this.setState({ showSpinner: false });
      }
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        {this.state.showSpinner ? (
          <div className="ui">
            <div className="ui active inverted dimmer">
              <div className="ui medium text loader">Loading</div>
            </div>
            <p />
          </div>
        ) : this.state.isLogged ? (
          this.props.children
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}
