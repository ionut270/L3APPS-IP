import React, { Component } from "react";
import { Divider, Header, Segment, Label, List } from "semantic-ui-react";
//import { Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
//import faker from "faker";

export default class cardTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8081/tasks")
            .then(res => {
                return res.json();
            })
            .then(res => {
                //this.state.tasks = res;
                this.setState({
                    tasks: res.reverse()
                });
                this.forceUpdate();
            })
            .catch(res => {
                console.log("bad gateway", res);
            });
    }
    render() {
        return (
            <div className="dashTask">
                <Segment color="red">
                    <Header as="h3">Tasks</Header>
                    <Divider section />
                    <List divided relaxed selectable="true">
                        {this.state.tasks
                            .map(data => {
                                var url = "/task/" + data._id;
                                var color;
                                if (data.status === "Done" || data.status === "done") {
                                    color = "green";
                                } else if (data.status === "Doing" || data.status === "doing") {
                                    color = "yellow";
                                } else if (data.status === "starting" || data.status === "Starting") {
                                    color = "teal";
                                } else if (data.status === "Postponed" || data.status === "postponed") {
                                    color = "red";
                                }

                                return (
                                    <List.Item
                                        as="a"
                                        href={url}
                                        key={data._id}
                                        onClick={console.log("Hi!")}
                                    >
                                        <List.Icon
                                            name="plug"
                                            size="large"
                                            verticalAlign="middle"
                                        />
                                        <List.Content>
                                            <List.Header>{data.name}</List.Header>
                                            <List.Description>
                                                <List horizontal className="TaskListItems">
                                                    <List.Item>{data.department}</List.Item>
                                                    <List.Content floated="right">
                                                        <List.Item className="PaddedInListElements">
                                                            <Label
                                                                color="blue"
                                                                className="mobileLabelTasks"
                                                            >
                                                                Due Date
                                                                <Label.Detail>
                                                                    {data.deadline}
                                                                </Label.Detail>
                                                            </Label>
                                                            <Label
                                                                color={color}
                                                                className="mobileLabelTasks"
                                                            >
                                                                {data.status}
                                                            </Label>
                                                        </List.Item>
                                                    </List.Content>
                                                </List>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                );
                            })}
                    </List>
                </Segment>
            </div>
        );
    }
}
