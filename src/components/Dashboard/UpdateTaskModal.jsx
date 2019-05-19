import React, { Component } from "react";
import { Button, Header, Modal, Icon, Form } from "semantic-ui-react";
import '../../style/Dashboard/UpdateTaskModal.css';

class UpdateTaskModal extends Component {
  state = {
    taskName: "",
    plan: "",
    deadline: "",
    description: "",
    submittedName: "",
    plannedTask: "",
    deadlineTask: "",
    descriptionTask: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { taskName, plan, deadline, description } = this.state;

    this.setState({
      submittedName: taskName,
      plannedTask: plan,
      deadlineTask: deadline,
      descriptionTask: description
    });
  };
  render() {
    const {
      taskName,
      plan,
      deadline,
      description,
      submittedName,
      plannedTask,
      deadlineTask,
      descriptionTask
    } = this.state;

    return (
      <div>
        <Modal trigger={<Button size="mini" color="yellow">UPDATE</Button>} closeIcon className="updateModal"> 
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
              <Form.Button color="green" content="Submit" />
            </Form>
            <strong>onChange:</strong>
            <pre>
              {JSON.stringify(
                { taskName, plan, deadline, description },
                null,
                4
              )}
            </pre>
            <strong>onSubmit:</strong>
            <pre>
              {JSON.stringify(
                { submittedName, plannedTask, deadlineTask, descriptionTask },
                null,
                4
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
