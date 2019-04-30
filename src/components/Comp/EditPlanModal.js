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
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class EditPlanModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            departament: "",
            description: "",
            priority: "",
            deadline: "",
            title: ""
        };
    }

    state = {
        visible: true,
        modalIsOpen: false
    };

    toggleModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            const title = res.data[0].title;
            console.log(title);
        });
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        if (
            this.state.name &&
            this.state.category &&
            this.state.departament &&
            this.state.description &&
            this.state.priority &&
            this.state.deadline
        ) {
            const create = {
                name: this.state.name,
                category: this.state.category,
                departament: this.state.departament,
                description: this.state.description,
                priority: this.state.priority,
                deadline: this.state.deadline
            };

            axios
                .post("https://jsonplaceholder.typicode.com/posts", { create })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log("Nu au fost introduse toate datele");
        }
    };

    getPlan = e => {
        e.preventDefault();
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            const title = res.data[0].title;
            console.log(title);
        });
    };

    render() {
        const {
            name,
            category,
            departament,
            description,
            priority,
            deadline
        } = this.state;
        return (
            <div className="EditPlanModal">
                <Button
                    color="outline-primary"
                    onClick={this.toggleModal.bind(this)}
                >
                    Edit Plan
                </Button>

                <Modal size="lg" isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>
                        Edit Plan
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitHandler}>
                            <FormGroup row>
                                <Label sm={3}>Name</Label>
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
                                <Label sm={3}>Category</Label>
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
                                <Label sm={3}>Departament</Label>
                                <Col sm={9}>
                                    <Input
                                        name="departament"
                                        value={departament}
                                        placeholder="Add a departament ..."
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Description</Label>
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
                                <Label sm={3}>Priority</Label>
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
                                <Label sm={3}>Deadline</Label>
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
                        <Button
                            color="secondary"
                            onClick={this.toggleModal.bind(this)}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EditPlanModal;
