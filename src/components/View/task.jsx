import React from "react";
import {
    Container,
    Header,
    Divider,
    Segment,
    Dimmer,
    Image,
    Progress,
    Responsive,
    Label,
    Card,
    Button,
    Loader
} from "semantic-ui-react";
import MyHeader from "../Header";
import CreateSubtaskModal from "../Comp/CreateSubTaskModal";
import Cookies from "universal-cookie";
var cookies = new Cookies();

var dataKey = 0;

class ViewTask extends React.Component {
    state = {
        loading: true,
        task: [],
        tasks: [],
        subtasks: [],
        profile: [],
        imIn: false,
        notask: "Loading ... "
    };
    async componentDidMount() {
        var currentUrl = window.location.href.split(/\//)["4"];
        const url = "http://localhost:8081/tasks/" + currentUrl;
        console.log("URL IS ", url);
        const response = await fetch(url);
        ///console.log(response.status)
        if (response.status === 200) {
            const data = await response.json();
            //console.log("Data",data.participants);
            for (let i = 0; i < data.participants.length; i++) {
                if (data.participants[i]._id === cookies.get("user_id")) {
                    console.log("Mine!");
                    this.setState({
                        imIn: true
                    });
                }
            }
            this.setState({ task: data, loading: false });
            //console.log(data);
            const urltasks = "http://localhost:8081/tasks";
            const responsetasks = await fetch(urltasks);
            const datatasks = await responsetasks.json();
            this.setState({ tasks: datatasks, loading: false });
            for (let i = 0; i < this.state.task.participants.length; i++) {
                if (
                    this.state.task.participants[i]._id !== undefined &&
                    this.state.task.participants[i]._id !== null &&
                    this.state.task.participants[i]._id !== ""
                ) {
                    //console.log("I'am", this.state.task.participants[i]);
                    const urlprofile =
                        "http://localhost:8081/get-profile/" + this.state.task.participants[i]._id;
                    fetch(urlprofile)
                        .then(data => {
                            return data.json();
                        })
                        .then(res => {
                            this.setState({ loading: false });
                            if (res === undefined) {
                            } else {
                                this.state.profile.push(res[1][0]);
                                //this.state.profile.push(this.state.task.participants[i]._id)
                            }
                            this.forceUpdate();
                            return (
                                "http://localhost:8081/get-position/" +
                                this.state.task.participants[i]._id
                            );
                        })
                        .then(url => {
                            fetch(url)
                                .then(data => {
                                    //return data.text();
                                    return data.json();
                                })
                                .then(res => {
                                    console.log(res);
                                    if (this.state.profile[i] !== undefined) {
                                        this.state.profile[i].position = res[1].position;
                                        this.state.profile[i]._id = this.state.task.participants[
                                            i
                                        ]._id;
                                        this.forceUpdate();
                                    }
                                });
                        })
                        .catch(res => {
                            console.log(res);
                        });
                }
            }
            for (var i = 0; i < this.state.task["sub-tasks"].length; i++) {
                var url2 = "http://localhost:8081/tasks/" + this.state.task["sub-tasks"][i]._id;
                fetch(url2)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        if (res._id !== undefined) {
                            this.state.subtasks.push(res);
                            this.forceUpdate();
                        }
                    })
                    .catch(res => {
                        console.log("No data avaiable for this task");
                    });
            }
            this.forceUpdate();
        } else {
            this.setState({
                notask: "This task does not exist"
            });
        }
    }
    render() {
        console.log(this.state.task.status);
        var percent = 0;
        if (this.state.task.status === "Not started") {
            percent = 0;
        }
        if (this.state.task.status === "Starting") {
            percent = 25;
        }
        if (this.state.task.status === "Doing") {
            percent = 50;
        }
        if (this.state.task.status === "Done") {
            percent = 100;
        }
        return (
            <div>
                <MyHeader />
                {this.state.loading || !this.state.task ? (
                    <div>
                        <Segment>
                            <Dimmer active inverted>
                                <Loader inverted>{this.state.notask}</Loader>
                            </Dimmer>
                        </Segment>
                    </div>
                ) : (
                    <div className="ViewTask">
                        <Container textAlign="justified">
                            <Divider horizontal>
                                <Header as="h1">{this.state.task.name}</Header>
                            </Divider>

                            <Segment color="yellow">
                                <Label ribbon="left" className="CenteredTagTaskPage">
                                    <Header as="h1">{this.state.task.priority}</Header>
                                </Label>

                                <Divider horizontal>
                                    <Segment.Group horizontal>
                                        <Responsive as={Segment}>
                                            {this.state.task.department}
                                        </Responsive>
                                        <Responsive as={Segment}>
                                            {this.state.task.deadline}
                                        </Responsive>
                                        <Responsive as={Segment}>
                                            {this.state.task.category}
                                        </Responsive>
                                    </Segment.Group>
                                </Divider>
                                <Divider horizontal>
                                    <Segment>
                                        <Header as="h4">{this.state.task.creator}</Header>
                                    </Segment>
                                </Divider>
                                <Divider hidden />
                                <Progress percent={percent} active color="yellow">
                                    {this.state.task.status}
                                </Progress>
                                <Divider hidden />
                                <Divider horizontal>
                                    <Header as="h3">Description</Header>
                                </Divider>
                                <Divider hidden />
                                <p>{this.state.task.description}</p>
                                <Divider hidden />
                                <Divider horizontal>
                                    <Header as="h3">Sub-Tasks</Header>
                                </Divider>
                                <Divider hidden />
                                <Card.Group>
                                    {this.state.subtasks.map(data => {
                                        console.log(data);
                                        dataKey++;
                                        var color;
                                        if (data.status === "Done") {
                                            color = "green";
                                        } else if (data.status === "Doing") {
                                            color = "yellow";
                                        } else if (data.status === "Starting") {
                                            color = "teal";
                                        } else if (data.status === "Postponed") {
                                            color = "red";
                                        }
                                        return (
                                            <Card key={dataKey}>
                                                <Card.Content href={"/task/" + data._id}>
                                                    <Card.Header>{data.name} </Card.Header>
                                                    <Card.Meta>{data.deadline}</Card.Meta>
                                                    <Card.Meta>
                                                        {data.priority}
                                                        <Label
                                                            color={color}
                                                            className="statusInTaskLabel"
                                                        >
                                                            Status: {data.status}
                                                        </Label>
                                                    </Card.Meta>
                                                </Card.Content>
                                            </Card>
                                        );
                                    })}
                                </Card.Group>
                                <Divider />
                                <Container className="ButtonContainer">
                                    <CreateSubtaskModal task={this.state.task} />
                                </Container>
                                <Divider horizontal>
                                    <Header as="h3">Participants</Header>
                                    <Button color="green">Add participants</Button>
                                </Divider>
                                <Divider hidden />
                                <Label.Group size="large" className="ListParticipants">
                                    {this.state.profile.map(data => {
                                        console.log("Profile", data);
                                        return (
                                            <Label
                                                key={data.email}
                                                className="ParticipantsLabel"
                                                as="a"
                                                color="blue"
                                                image
                                                href={"/profileof/" + data._id}
                                            >
                                                {data.nume} {data.prenume}
                                                <Label.Detail>{data.position}</Label.Detail>
                                            </Label>
                                        );
                                    })}
                                </Label.Group>
                            </Segment>
                        </Container>
                    </div>
                )}
            </div>
        );
    }
}

export default ViewTask;
