import React, { Component } from "react";
import {
    Button,
    Modal,
    Form,
    Label,
    Col,
    Input,
    FormGroup,
    ModalHeader,
    ModalFooter,
    ModalBody
} from "reactstrap";
import Cookies from "universal-cookie";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";

class CreateTaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            department: "",
            description: "",
            priority: "",
            deadline: "",
            status: ""
        };
    }

    state = {
        visible: true,
        modalIsOpen: false
    };

    toggleModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        if (
            this.state.name &&
            this.state.category &&
            this.state.department &&
            this.state.description &&
            this.state.priority &&
            this.state.deadline
        ) {
            const create = {
                name: this.state.name,
                category: this.state.category,
                department: this.state.department,
                description: this.state.description,
                priority: this.state.priority,
                deadline: this.state.deadline,
                status: this.state.status
            };
            //console.log("Create", create, JSON.stringify(create));
            const cookies = new Cookies();
            //const userId = cookies.get("user_id");
            var to_send = {
                name: create.name,
                category: create.category,
                creator: "Oancea Ionut Eugen <ionut.oancea@info.uaic.ro>",
                deadline: create.deadline,
                department: create.department,
                description: create.description,
                priority: create.priority,
                status: create.status,
                "sub-tasks": [],
                timestamp: "",
                participants: [
                    {
                        _id: cookies.get("user_id")
                    }
                ]
            };
            console.log("Sending", to_send);
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
                    console.log(res);
                });
        } else {
            alert("Nu au fost introduse toate datele");
        }
    };

    render() {
        const { name, category, department, description, priority, deadline, status } = this.state;
        return (
            <div className="CreateTaskModal">
                <Button
                    color="outline-primary"
                    onClick={this.toggleModal.bind(this)}
                    size="lg"
                    block
                >
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
                                    status
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        name="status"
                                        value={status}
                                        placeholder="Status ..."
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
                                    <Input
                                        name="deadline"
                                        placeholder="Example: 01/02/2019"
                                        value={deadline}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Form onSubmit={this.submitHandler}>
                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Button color="secondary" onClick={this.toggleModal.bind(this)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateTaskModal;
