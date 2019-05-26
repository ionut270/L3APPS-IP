import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import MyHeader from "../Header";
import PersonalTasks from "./PersonalTasks";
import { Grid } from "semantic-ui-react";

import "../../style/Dashboard/App.css";

export default class My_tasks extends Component {
    render() {
        return (
            <div className="dashContainer">
                <MyHeader />
                <div className="dashFlex">
                    <Grid columns="equal" className="DashboardGeneralSize">
                        {/* <Grid.Column width={8}>
                            <PersonalTasks />
                        </Grid.Column> */}
                        <Grid.Column>
                            <Grid columns="equal">
                                <Grid.Row>
                                    <PersonalTasks />
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
