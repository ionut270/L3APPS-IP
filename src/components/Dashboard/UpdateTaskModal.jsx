import React, { Component } from "react";
import { Button, Header, Modal, Icon, Form } from "semantic-ui-react";
import "../../style/Dashboard/UpdateTaskModal.css";


fetch('http://localhost:8081/tasks',)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    document.getElementById('taskName').innerHTML= myJson.name;
  });

class UpdateTaskModal extends Component {
  state = {
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { taskName, plan, deadline, description, category, departament, priority } = this.state;

    this.setState({
      submittedName: taskName,
      plannedTask: plan,
      deadlineTask: deadline,
      descriptionTask: description,
      categoryChanged: category,
      departamentChanged: departament,
      priorityChanged: priority
    });
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
              />

              <Form.Input label="Project" readOnly>
                Project name
              </Form.Input>

              <Form.Group widths={2} label="Due date">
                <Form.Input
                  name="plan"
                  value={plan}
                  onChange={this.handleChange}
                  label="Planning"
                  type="date"
                />
                <Form.Input
                  type="date"
                  name="deadline"
                  value={deadline}
                  onChange={this.handleChange}
                  label="Due date"
                />
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
                { taskName, plan, deadline, description, category, departament,priority },
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
    );
  }
}

export default UpdateTaskModal;
