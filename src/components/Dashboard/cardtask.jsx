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
                                <List.Header as="a">Task Name</List.Header>
                                <Label color="orange">
                                    Project:
                                    <Label.Detail>Fii Code</Label.Detail>
                                </Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label color="green">In progres</Label>
                                <Label>
                                    Planned for:{" "}
                                    <Label.Detail>25.02.2012</Label.Detail>
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
                                <List.Header as="a">Task Name</List.Header>
                                <Label color="orange">
                                    Project:
                                    <Label.Detail>Fii Code</Label.Detail>
                                </Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label color="green">In progres</Label>
                                <Label>
                                    Planned for:{" "}
                                    <Label.Detail>25.02.2012</Label.Detail>
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
                                <List.Header as="a">Task Name</List.Header>
                                <Label color="orange">
                                    Project:
                                    <Label.Detail>Fii Code</Label.Detail>
                                </Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label color="green">In progres</Label>
                                <Label>
                                    Planned for:{" "}
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}
                    </List>
                </Segment>
            </div>
        );
    }
}
