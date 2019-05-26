import React, { Component } from "react";
import { Segment, Container, Form, TextArea, Divider } from "semantic-ui-react";

import MyHeader from "../Header";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      task: [],
      tasks: [],
      subtasks: [],
      profile: [],
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit = async () => {
    const url = `http://localhost:8081/tasks`;
    console.log(this.state);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(this.state.task), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:8081/tasks/${this.props.location.state.id}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({ task: data });
  }
  refreshPage = e => {
    alert("Datele au fost schimbate!");
  };
  render() {
    return (
      <div className="EditTask">
        <MyHeader />
        <Container text>
          <Segment color="red">
            <Form onSubmit={() => this.handleSubmit()}>
              <Divider horizontal>Task Name</Divider>
              <Form.Input
                placeholder="Edit task name"
                name="taskName"
                value={this.state.task.name}
                onChange={e => {
                  this.setState({
                    task: { ...this.state.task, name: e.target.value }
                  });
                }}
              />

              <Divider horizontal>Due Date</Divider>
              <Form.Input
                width="16"
                type="date"
                name="deadline"
                onChange={e => {
                  this.setState({
                    task: {
                      ...this.state.task,
                      deadline: e.target.value
                    }
                  });
                }}
                placeholder="Deadline"
                value={this.state.task.deadline}
              />

              <Divider horizontal>Change description</Divider>
              <TextArea
                width="16"
                placeholder="Description"
                name="description"
                onChange={e => {
                  this.setState({
                    task: {
                      ...this.state.task,
                      description: e.target.value
                    }
                  });
                }}
                value={this.state.task.description}
              />

              <Divider horizontal>Change category</Divider>
              <Form.Input
                placeholder="Category"
                name="category"
                onChange={e => {
                  this.setState({
                    task: {
                      ...this.state.task,
                      category: e.target.value
                    }
                  });
                }}
                value={this.state.task.category}
              />

              <Divider horizontal>Change department</Divider>
              <Form.Input
                placeholder="Departament"
                name="departament"
                onChange={e => {
                  this.setState({
                    task: {
                      ...this.state.task,
                      department: e.target.value
                    }
                  });
                }}
                value={this.state.task.department}
              />

              <Divider horizontal>Change priority</Divider>

              <select
                onChange={e => {
                  this.setState({
                    task: {
                      ...this.state.task,
                      priority: e.target.value
                    }
                  });
                }}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <Divider hidden />

              <Divider horizontal>Change status</Divider>
              <select
                onChange={e => {
                  this.setState({
                    task: {
                      ...this.state.task,
                      status: e.target.value
                    }
                  });
                }}
              >
              <option value="notStarted">Not started</option>
                <option value="starting">Starting</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <Divider horizontal>
                <Form.Button
                  color="green"
                  content="Submit"
                  onClick={this.refreshPage}
                />
              </Divider>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default EditTask;
