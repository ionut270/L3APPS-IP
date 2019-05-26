import React, { Component } from 'react';
import { Button, Modal, Form, Label, Col, Input, FormGroup, ModalHeader, ModalFooter, ModalBody, Row } from 'reactstrap';
import "semantic-ui-css/semantic.min.css";
import Cookies from "universal-cookie";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const cookies = new Cookies();

function formatDate(date) {
  var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

class CreateSubTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtask: {
        name: "",
        category: "",
        department: "",
        description: "",
        priority: "",
        time: "",
        deadline: formatDate(new Date()),
        status: "Not started",
        date: new Date(),
        render_calendar: false
      }
    };
  }

  
  componentDidMount() {
    fetch("http://localhost:8081/get-profile/" + cookies.get("user_id"))
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({
                creator_name: response[1][0].nume,
                creator_surname: response[1][0].prenume,
                creator_email: response[1][0].email
            });
            this.forceUpdate();
        })
        .catch(res => {
            console.log("ERR GETING AUTHOR DETAILS");
        });
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
    this.setState({ [e.target.name]: e.target.value });
  }

  onChange = date => {
    this.setState({ date });
    this.setState({
        deadline: formatDate(this.state.date)
    });
};

  submitHandler = e => {
    e.preventDefault()
    if (this.state.subtask.name && this.state.subtask.category && this.state.subtask.department && this.state.subtask.description && this.state.subtask.priority && this.state.subtask.time && this.state.subtask.deadline ) {

      const create = {
        name: this.state.subtask.name,
        category: this.state.subtask.category,
        department: this.state.subtask.department,
        description: this.state.subtask.description,
        priority: this.state.subtask.priority,
        deadline: this.state.subtask.deadline,
        status: this.state.subtask.status,
        time: this.state.subtask.time
    };
    //console.log("Create", create, JSON.stringify(create));
    const cookies = new Cookies();
    //const userId = cookies.get("user_id");

    var to_send = {
        name: create.name,
        category: create.category,
        creator:
            this.state.creator_name +
            " " +
            this.state.creator_surname +
            " <" +
            this.state.creator_email +
            ">",
        deadline: create.deadline,
        department: create.department,
        description: create.description,
        priority: create.priority,
        status: "Not started",
        "sub-tasks": [],
        timestamp: "",
        "hour estimation": create.time,
        participants: [
            {
                _id: cookies.get("user_id")
            }
        ]
    };
    //console.log("Sending", JSON.stringify(to_send));
    fetch("http://localhost:8081/tasks", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(to_send) // body data type must match "Content-Type" header
    })
        .then(res => {
            return res.json();
        })
        .then(res => {

          console.log("Task created ..." , res, "\n\n", to_send );

          const task = { ...this.state.task };
          this.setState({
            subtask:{
              _id : res._id
            }
          })
          //this.state.subtask._id = res._id;
          task['sub-tasks'].push(this.state.subtask);
          fetch('http://localhost:8081/tasks', {
            method: "PUT",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(task)
          })
            .then(response => {
              console.log("sent data task:",task)
              this.setState({ modalIsOpen: !this.state.modalIsOpen });
              return response.json();
            })
            .then(res=>{
              console.log("sent data:",task , "\n","recieved data:",res)
            })
            .catch(error => {
              console.log(error)
            })
        })
        .then(res=>{
          window.location.reload();
        })
    }
    else {
      alert('Nu au fost introduse toate datele');
    }
  }

  render() {
    const { name, category, department, description, priority, time } = this.state.subtask;
    return (
      <div className="CreateTaskModal">
                <Button color="outline-primary" onClick={this.toggleModal.bind(this)} block>
                    Create Task
                </Button>
                <Modal size="lg" isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>Create Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitHandler}>
                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Name
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        name="name"
                                        value={name}
                                        placeholder="Add a name ..."
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Category
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        name="category"
                                        value={category}
                                        placeholder="Add a category ..."
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Departament
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        name="department"
                                        value={department}
                                        placeholder="Add a department ..."
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Description
                                </Label>
                                <Col sm={9}>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        placeholder="Add a description ..."
                                        value={description}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Task time estiamte
                                </Label>
                                <Col sm={9}>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="time"
                                        placeholder="Add time ..."
                                        value={time}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Priority
                                </Label>
                                <Col sm={9}>
                                    <select
                                        className="browser-default custom-select"
                                        name="priority"
                                        value={priority}
                                        onChange={this.changeHandler}
                                    >
                                        <option>Choose your priority</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label className="black-text" sm={3}>
                                    Deadline
                                </Label>
                                <Col sm={9}>
                                    <Calendar
                                        className="CalendarWidthMax"
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Row>
                            <Col xs={6}>
                                <Form onSubmit={this.submitHandler}>
                                    <Button
                                        color="success"
                                        type="submit"
                                        onClick={this.toggleModal.bind(this)}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col xs={6}>
                                <Button color="danger" onClick={this.toggleModal.bind(this)}>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </ModalFooter>
                </Modal>
            </div>
    );
  }
}

export default CreateSubTaskModal;
