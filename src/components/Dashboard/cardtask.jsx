import React, { Component } from "react";
import { Divider, Header, Segment, Label, List } from "semantic-ui-react";
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
                    tasks: res
                });
                this.forceUpdate();
            });
    }
    render() {
        return (
            <div className="dashTask">
                <Segment color="red">
                    <Header as="h3">Tasks</Header>
                    <Divider section />
                    <List divided relaxed selectable>
                        {this.state.tasks.map(data => {
                            var url = "/task/" + data._id;
                            return (
                                <List.Item
                                    as="a"
                                    href={url}
                                    key={data._id}
                                    onClick={console.log("Hi!")}
                                >
                                    <List.Icon name="plug" size="large" verticalAlign="middle" />
                                    <List.Content>
                                        <List.Header as="a">{data.name}</List.Header>
                                        <Label color="orange">
                                            Departament:
                                            <Label.Detail>{data.department}</Label.Detail>
                                        </Label>
                                        <Label color="red">
                                            Due Date
                                            <Label.Detail>{data.deadline}</Label.Detail>
                                        </Label>
                                        <Label color="green">{data.status}</Label>
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
