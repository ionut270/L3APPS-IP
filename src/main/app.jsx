import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";

//page components
import MainLayout from "../components/mainLayout/MainLayout";
import Login from "../containers/login/loginComponents/ContainerLogin";
import Home from "../containers/home/homeComponents/ContainerHome";
import WithAuth from "../components/auth/WithAuth";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    {/* Protected routes */}
                    <Route
                        exact
                        path="/home"
                        render={props => (
                            <WithAuth {...props}>
                                <MainLayout {...props}>
                                    <Home />
                                </MainLayout>
                            </WithAuth>
                        )}
                    />

                    {/* When you insert a wrong route you will be automatically redirect to login screen */}
                    <Route component={Login} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state
    };
};

export default connect(mapStateToProps)(App);
