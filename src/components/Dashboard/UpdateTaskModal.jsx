import React, { Component } from "react";
import { Button, Header, Modal, Icon, Form } from "semantic-ui-react";
import "../../style/Dashboard/UpdateTaskModal.css";

class UpdateTaskModal extends React.Component {
  state = {
    loading: true,
    taskName: "",
    plan: "",
    deadline: "",
    description: "",
    category: "",
    departmanet: "",
    priority: "",
    submittedName: "",
    plannedTask: "",
    deadlineTask: "",
    descriptionTask: "",
    categoryChanged: "",
    departamentChanged: "",
    priorityChanged: ""
  };

  async componentDidMount() {
    const url = "http://localhost:8081/tasks/5ce1712510ecd1095a50fa01";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ task: data, loading: false });
    const urltasks = "http://localhost:8081/tasks";
    const responsetasks = await fetch(urltasks);
    const datatasks = await responsetasks.json();
    this.setState({ tasks: datatasks, loading: false });
    for (let i = 0; i < this.state.task.participants.length; i++) {
      const urlprofile =
        "http://localhost:8081/get-profile/" +
        this.state.task.participants[i]._id;

      fetch(urlprofile)
        .then(data => {
          this.setState({ loading: false });
          this.state.profile.push(data[1][0]);
          return (
            "http://localhost:8081/get-position/" +
            this.state.task.participants[i]._id
          );
        })
        .then(url => {
          fetch(url).then(data => {
            this.setState({ loading: false });
            this.state.profile[i].job.push(data[1][0]);
          });
        });
    }
    console.log(this.state.profile[0]);
  }





  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const {
      taskName,
      plan,
      deadline,
      description,
      category,
      departament,
      priority
    } = this.state;


  };
  render() {
    const {
      taskName,
      plan,
      deadline,
      description,
      category,
      departament,
      priority,
      submittedName,
      plannedTask,
      deadlineTask,
      descriptionTask,
      categoryChanged,
      departamentChanged,
      priorityChanged
    } = this.state;

    return (
      <div>
        <Modal
          trigger={
            <Button size="mini" color="yellow">
              UPDATE
            </Button>
          }
          closeIcon
          className="updateModal"
        >
          <Header icon="archive" content="Update task" />
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label="Task name"
                placeholder="Edit task name"
                name="taskName"
                value={taskName}
                onChange={this.handleChange}
                content= "{this.state.task.name}"
              />

              <Form.Input label="Project" readOnly content="Project name">

              </Form.Input>

              <Form.Group widths={2} label="Due date">
                <Form.Input
                  name="plan"
                  value={plan}
                  onChange={this.handleChange}
                  label="Planning"
                  type="date"
                  content= "{this.state.task.timestamp}"
                ><span id="plan">Planned</span></Form.Input>
                <Form.Input
                  type="date"
                  name="deadline"
                  value={deadline}
                  onChange={this.handleChange}
                  label="Due date"
                  content= "{this.state.task.deadline}"
                ><span id="deadline">Deadline</span></Form.Input>
              </Form.Group>
              <Form.Input
                width="16"
                placeholder="Description"
                name="description"
                value={description}
                onChange={this.handleChange}
                label="Change description"
              />
              <Form.Group>
                <Form.Input
                  width="8"
                  placeholder="Category"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                  label="Change category"
                />
                <Form.Input
                  width="8"
                  placeholder="Departament"
                  name="departament"
                  value={departament}
                  onChange={this.handleChange}
                  label="Change departament"
                />
              </Form.Group>
              <Form.Input
                width="16"
                placeholder="Priority"
                name="priority"
                value={priority}
                onChange={this.handleChange}
                label="Change priority"
              />
              <Form.Button color="green" content="Submit" />
            </Form>
            <strong>onChange:</strong>
            <pre>
              {JSON.stringify(
                {
                  taskName,
                  plan,
                  deadline,
                  description,
                  category,
                  departament,
                  priority
                },
                null,
                8
              )}
            </pre>
            <strong>onSubmit:</strong>
            <pre>
              {JSON.stringify(
                {
                  submittedName,
                  plannedTask,
                  deadlineTask,
                  descriptionTask,
                  categoryChanged,
                  departamentChanged,
                  priorityChanged
                },
                null,
                8
              )}
            </pre>
          </Modal.Content>
          <Modal.Actions />
        </Modal>
        </div>
        )

      };
    }

export default UpdateTaskModal;
