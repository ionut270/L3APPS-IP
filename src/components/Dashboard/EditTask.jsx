import React, { Component } from "react";
import { Divider, Segment, Icon, List, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import MyHeader from "../Header";

class EditTask extends Component {
  render() {
    return (
      <div className="EditTask">
        <MyHeader />
        {this.props.location.state.id}
      </div>
    );
  }
}

export default EditTask;
