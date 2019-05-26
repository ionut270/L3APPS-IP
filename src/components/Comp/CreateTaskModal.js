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
    ModalBody,
    Row
} from "reactstrap";
// import { Select } from "semantic-ui-react";
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

class CreateTaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            department: "",
            description: "",
            priority: "",
            time: "",
            deadline: formatDate(new Date()),
            status: "",
            date: new Date(),
            render_calendar: false
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
                status: this.state.status,
                time: this.state.time
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
                    window.location.reload();
                });
            //alert("Task-ul a fost creat!");
        } else {
            alert("Nu au fost introduse toate datele");
        }
    };
    onChange = date => {
        this.setState({ date });
        this.setState({
            deadline: formatDate(this.state.date)
        });
    };
    render() {
        const { name, category, department, description, priority, time } = this.state;
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

export default CreateTaskModal;
