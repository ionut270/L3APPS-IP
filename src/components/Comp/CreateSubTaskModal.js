import React, { Component } from 'react';
import { Button, Modal, Form, Label, Col, Input, FormGroup, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateSubTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtask: {
        name: '',
        category: '',
        description: '',
        priority: '',
        deadline: '',
        difficulty: ''
      }
    };
  }
  state = {
    visible: true,
    modalIsOpen: false
  }

  toggleModal() {
    this.setState(
      {
        modalIsOpen: !this.state.modalIsOpen,
        task: this.props.task
      }
    );
  }

  changeHandler = e => {
    const subtask = { ...this.state.subtask };
    const property = [e.target.name];
    subtask[`${property}`] = e.target.value;
    this.setState({ subtask });
  }

  submitHandler = e => {
    e.preventDefault()
    if (this.state.subtask.name && this.state.subtask.category && this.state.subtask.description && this.state.subtask.priority && this.state.subtask.deadline) {
      const task = { ...this.state.task };
      task['sub-tasks'].push(this.state.subtask);
      fetch('http://localhost:8081/tasks', {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(task)
      })
        .then(response => {
          this.setState({ modalIsOpen: !this.state.modalIsOpen });
        })
        .catch(error => {
          console.log(error)
        })

    }
    else {
      alert('Nu au fost introduse toate datele');
    }
  }

  render() {
    const { name, category, description, priority, deadline, difficulty } = this.state.subtask;
    return (
      <div className="CreateSubTaskModal">
        <Button color="outline-primary" onClick={this.toggleModal.bind(this)} size="lg" block>Create SubTask</Button>

        <Modal size='lg' isOpen={this.state.modalIsOpen}   >
          <ModalHeader toggle={this.toggleModal.bind(this)}  >Create SubTask</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submitHandler}>
              <FormGroup row>
                <Label className="black-text" sm={3}>Name</Label>
                <Col sm={9}>
                  <Input name="name" value={name} placeholder="Add a name ..." onChange={this.changeHandler} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label className="black-text" sm={3}>Category</Label>
                <Col sm={9}>
                  <Input name="category" value={category} placeholder="Add a category ..." onChange={this.changeHandler} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label className="black-text" sm={3}>Difficulty</Label>
                <Col sm={9}>
                  <select className="browser-default custom-select" name="difficulty" value={difficulty} onChange={this.changeHandler}>
                    <option>Choose your difficulty</option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label className="black-text" sm={3}>Description</Label>
                <Col sm={9}>
                  <textarea className="form-control" placeholder="Add a description ..." name="description" value={description} onChange={this.changeHandler} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label className="black-text" sm={3}>Priority</Label>
                <Col sm={9}>
                  <select className="browser-default custom-select" name="priority" value={priority} onChange={this.changeHandler}>
                    <option>Choose your priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label className="black-text" sm={3}>Deadline</Label>
                <Col sm={9}>
                  <Input name="deadline" value={deadline} placeholder="Example: 01/02/2019" onChange={this.changeHandler} />
                </Col>
              </FormGroup>


            </Form>
          </ModalBody>
          <ModalFooter >
            <Form onSubmit={this.submitHandler}>
              <Button color="primary" type="submit" >Submit</Button>
            </Form>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateSubTaskModal;
