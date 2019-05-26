import React, { Component } from "react";
import {
  Divider,
  Segment,
  Icon,
  List,
  Button,
  Grid,
  Form
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
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
    const url = `http://vvtsoft.ddns.net:5123/tasks`;
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
                  <Segment color="red">
                    <Form onSubmit={() => this.handleSubmit()}>
                      <Form.Input
                        label="Task name"
                        placeholder="Edit task name"
                        name="taskName"
                        value={this.state.task.name}
                        onChange={e => {
                          this.setState({
                            task: { ...this.state.task, name: e.target.value }
                          });
                        }}
                      />

                      <Form.Input
                        label="Project"
                        readOnly
                        content="Project name"
                      />

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
                        label="Due date"
                        placeholder="Deadline"
                        value={this.state.task.deadline}
                      />

                      <Form.Input
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
                        label="Change description"
                        value={this.state.task.description}
                      />
                      <Form.Group>
                        <Form.Input
                          width="8"
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
                          label="Change category"
                          value={this.state.task.category}
                        />
                        <Form.Input
                          width="8"
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
                          label="Change departament"
                          value={this.state.task.department}
                        />
                      </Form.Group>
                      <Form.Input
                        width="16"
                        placeholder="Priority"
                        name="priority"
                        onChange={e => {
                          this.setState({
                            task: {
                              ...this.state.task,
                              priority: e.target.value
                            }
                          });
                        }}
                        label="Change priority"
                        value={this.state.task.priority}
                      />
                      <Form.Button color="green" content="Submit" />
                    </Form>
                  </Segment>
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
