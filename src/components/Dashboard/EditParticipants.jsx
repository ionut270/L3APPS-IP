import React, { Component } from "react";
import { Segment, Container, Form, TextArea, Divider } from "semantic-ui-react";

class EditParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      task: [],
      tasks: [],
      subtasks: [],
      profile: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  render() {
    return (
    <div>
        <List horizontal ordered>
            <List.Item>
                <List.Content>
                    <List.Header>Tom</List.Header>
                    Top Contributor
                </List.Content>
            </List.Item>
        </List>


    </div>);
  }
}
export default EditParticipants;
