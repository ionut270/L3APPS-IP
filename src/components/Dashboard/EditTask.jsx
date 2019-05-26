import React, { Component } from "react";
import { Divider, Segment, Icon, List, Button, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import MyHeader from "../Header";

class EditTask extends Component {
  render() {
    return (
      <div className="EditTask">
        <MyHeader />

        <div className="dashFlex">
          <Grid columns="equal" className="DashboardGeneralSize">
            <Grid.Column>
              <Grid columns="equal">
                <Grid.Row>
                  {" "}
                  <Segment color="red">Insereaza insereaza aici</Segment>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default EditTask;
