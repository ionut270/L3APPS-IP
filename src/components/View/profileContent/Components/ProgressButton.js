import React from "react";
import { Button, Header, Divider, Progress, Modal } from "semantic-ui-react";
import axios from "axios";

class ProgressButton extends React.Component {
    state = { modalOpen: false, employees: [] };

    componentDidMount() {
        fetch("http://localhost:8081/viewUnderlings/2")
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({
                    employees: response[1]
                });
            });
    }

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    render() {
        const { posts } = this.state.employees;
        return (
            <div className="ProgressButton">
                <Modal
                    trigger={
                        <Button onClick={this.handleOpen} color="green">
                            Subordinates
                        </Button>
                    }
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                >
                    <Modal.Header>Suboordinates</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Divider horizontal>
                                <Header>Nume Subordonat</Header>
                            </Divider>
                            <Progress
                                active
                                color="orange"
                                value="2"
                                total="8"
                                progress="ratio"
                            >
                                Current: Nume Task
                            </Progress>
                            <Divider hidden />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            icon="check"
                            color="green"
                            content="Seen"
                            onClick={this.handleClose}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default ProgressButton;
