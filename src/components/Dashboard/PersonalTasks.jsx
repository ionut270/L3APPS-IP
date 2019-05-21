import React, { Component } from "react";
import { Divider, Segment, Icon, List, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
//import faker from "faker";

import Cookies from "universal-cookie";

export default class PersonalTask extends Component {
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
            <div className="dashSubtask">
                <Segment color="red">
                    {/* <Header as="h3">
						<Dropdown placeholder="Today" fluid selection options={options} />
					</Header> */}
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
                        {this.state.tasks.map(data => {
                            //console.log("MAP!")
                            if (data.participants !== undefined) {
                                var i = 0;
                                while (i <= data.participants.length) {
                                    //console.log("i=",i,"=",data.participants[i],"/",data.participants.length);
                                    if (data.participants[i] !== undefined) {
                                        //
                                        //var cookies = new Cookies();
                                        //console.log(cookies.get("user_id"), "=",data.participants[i]._id);
                                        var cookies = new Cookies();
                                        cookies.get("user_id");
                                        var myid = cookies.get("user_id");
                                        if (myid === data.participants[i]._id) {
                                            //console.log(data);
                                            var url = "/task/" + data._id;
                                            return (
                                                <List.Item href={url}>
                                                    <List.Icon
                                                        name="cogs"
                                                        size="large"
                                                        verticalAlign="middle"
                                                    />
                                                    <List.Content>
                                                        <Segment.Group horizontal basic>
                                                            <Segment basic>{data.name}</Segment>
                                                            <Segment basic>
                                                                Due date: {data.deadline}
                                                            </Segment>
                                                            <Segment basic>
                                                                Status: {data.status}
                                                            </Segment>
                                                        </Segment.Group>
                                                        <List.Header as="a">
                                                            {data.description}
                                                        </List.Header>
                                                    </List.Content>
                                                </List.Item>
                                            );
                                        } else {
                                            return null;
                                        }
                                    }
                                    i++;
                                }
                            } else {
                                return null;
                            }
                            return null;
                        })}
                    </List>
                </Segment>
            </div>
        );
    }
}
