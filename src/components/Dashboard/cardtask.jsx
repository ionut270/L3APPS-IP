import React, { Component } from "react";
import {
    Divider,
    Header,
    Segment,
    Icon,
    Menu,
    Dropdown,
    Image,
    Input,
    Label,
    List
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import faker from "faker";
import '../../style/Dashboard/UpdateTaskModal.css';

import UpdateTaskModal from './UpdateTaskModal';

export default class cardTask extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dashTask">
                <Segment color="red">
                    <Header as="h3">Tasks</Header>
                    <Divider section />
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon
                                name="plug"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a" ><span id="taskName">Task Name</span></List.Header>
                                <Label color="orange">
                                    Project:
                                    <Label.Detail><span id="projectName">Fii Code</span></Label.Detail>
                                </Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail><span id="deadline">25.02.2012</span></Label.Detail>
                                </Label>
                                <Label color="green"><span id="status">In progres</span></Label>
                                <Label>
                                    Planned for:{" "}
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label className="updateButton">
                                    <UpdateTaskModal></UpdateTaskModal>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}

                        <List.Item>
                            <List.Icon
                                name="plug"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a"><span id="taskName">Task Name</span></List.Header>
                                <Label color="orange">
                                    Project:
                                    <Label.Detail><span id="projectName">Fii Code</span></Label.Detail>
                                </Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail><span id="deadline">25.02.2012</span></Label.Detail>
                                </Label>
                                <Label color="green"><span id="status">In progres</span></Label>
                                <Label>
                                    Planned for:{" "}
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label className="updateButton">
                                    <UpdateTaskModal></UpdateTaskModal>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}

                        <List.Item>
                            <List.Icon
                                name="plug"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a"><span id="taskName">Task Name</span></List.Header>
                                <Label color="orange">
                                    Project:
                                    <Label.Detail><span id="projectName">Fii Code</span></Label.Detail>
                                </Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail><span id="deadline">25.02.2012</span></Label.Detail>
                                </Label>
                                <Label color="green"><span id="status">In progres</span></Label>
                                <Label>
                                    Planned for:{" "}
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label className="updateButton">
                                    <UpdateTaskModal></UpdateTaskModal>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}
                    </List>
                </Segment>
            </div>
        );
    }
}
