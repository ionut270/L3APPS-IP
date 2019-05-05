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
    List,
    Button
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import faker from "faker";

export default class subtasks extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const options = [
            {
                key: "Today",
                text: "Today",
                value: "Today"
            },
            {
                key: "Tomorow",
                text: "Tomorow",
                value: "Tomorow"
            }
        ];
        return (
            <div className="dashSubtask">
                <Segment color="red">
                    <Header as="h3">
                        {" "}
                        <Dropdown
                            placeholder="Today"
                            fluid
                            selection
                            options={options}
                        />
                    </Header>
                    <Button icon labelPosition="right">
                        <Icon name="redo" />
                        Rearange
                    </Button>
                    <Button icon labelPosition="right">
                        <Icon name="warning sign" />
                        Report
                    </Button>
                    <Divider section />
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon
                                name="cogs"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a">
                                    Some random task to do for a project
                                </List.Header>
                                <Segment.Group horizontal basic>
                                    {" "}
                                    <Segment basic>Project name</Segment>
                                    <Segment basic>
                                        Due date: 12.02.2012
                                    </Segment>
                                    <Segment basic>
                                        Status: Work in progress
                                    </Segment>
                                </Segment.Group>
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon
                                name="cogs"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a">
                                    Some random task to do for a project
                                </List.Header>
                                <Segment.Group horizontal basic>
                                    {" "}
                                    <Segment basic>Project name</Segment>
                                    <Segment basic>
                                        Due date: 12.02.2012
                                    </Segment>
                                    <Segment basic>
                                        Status: Work in progress
                                    </Segment>
                                </Segment.Group>
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon
                                name="cogs"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a">
                                    Some random task to do for a project
                                </List.Header>
                                <Segment.Group horizontal basic>
                                    {" "}
                                    <Segment basic>Project name</Segment>
                                    <Segment basic>
                                        Due date: 12.02.2012
                                    </Segment>
                                    <Segment basic>
                                        Status: Work in progress
                                    </Segment>
                                </Segment.Group>
                            </List.Content>
                        </List.Item>
                    </List>
                </Segment>
            </div>
        );
    }
}
