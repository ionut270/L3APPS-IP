import React from "react";
import {
    Container,
    Header,
    Divider,
    Segment,
    Progress,
    Responsive,
    Label,
    Card
} from "semantic-ui-react";
import MyHeader from "../Header";

class ViewTask extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        loading: true,
        task: [],
        tasks: [],
        subtasks: [],
        profile: []
    };

    async componentDidMount() {
        var currentUrl = window.location.href.split(/\//)["4"];
        const url = "http://vvtsoft.ddns.net:5123/tasks/" + currentUrl;
        console.log("URL IS ", url);
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ task: data, loading: false });
        const urltasks = "http://vvtsoft.ddns.net:5123/tasks";
        const responsetasks = await fetch(urltasks);
        const datatasks = await responsetasks.json();
        this.setState({ tasks: datatasks, loading: false });
        for (let i = 0; i < this.state.task.participants.length; i++) {
            if (
                this.state.task.participants[i]._id !== undefined &&
                this.state.task.participants[i]._id !== null &&
                this.state.task.participants[i]._id !== ""
            ) {
                console.log("I'am", this.state.task.participants[i]);
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
                        }
                        this.forceUpdate();
                        return (
                            "http://localhost:8081/get-position/" +
                            this.state.task.participants[i]._id
                        );
                    })
                    /**problema la get! */
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
                                    this.forceUpdate();
                                    //console.log(url);
                                }
                            });
                    });
            }
        }
        for (var i = 0; i < this.state.task["sub-tasks"].length; i++) {
            console.log("Count!");
            var url2 = "http://vvtsoft.ddns.net:5123/tasks/" + this.state.task["sub-tasks"][i];
            fetch(url2)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    //console.log("RES", res);
                    this.state.subtasks.push(res);
                    //console.log("NEW RES IS ", this.state.subtasks);
                });
        }
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <MyHeader />
                {this.state.loading || !this.state.task ? (
                    <div>Task Not Found</div>
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
                                <Progress percent={0} active color="yellow">
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
                                        return (
                                            <Card key={data._id}>
                                                <Card.Content>
                                                    <Card.Header>{data.name}</Card.Header>
                                                    <Card.Meta>{data.deadline}</Card.Meta>
                                                    <Card.Meta>{data.priority}</Card.Meta>
                                                    <Card.Meta>{data.status}</Card.Meta>
                                                </Card.Content>
                                            </Card>
                                        );
                                    })}
                                </Card.Group>
                                <Divider hidden />
                                <Divider horizontal>
                                    <Header as="h3">Participants</Header>
                                </Divider>
                                <Divider hidden />
                                <Label.Group size="large" className="ListParticipants">
                                    {this.state.profile.map(data => {
                                        return (
                                            <Label
                                                key={data.email}
                                                className="ParticipantsLabel"
                                                as="a"
                                                color="blue"
                                                image
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
