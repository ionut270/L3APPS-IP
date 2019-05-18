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

class ViewTask extends React.Component {
  state = {
    loading: true,
    task: [],
    profile: [],
    position: null
  };

  async componentDidMount() {
    const url = "http://vvtsoft.ddns.net:5123/tasks/5cddeedc10ecd14e16ac3b69";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ task: data, loading: false });
    const urlprofile = "http://localhost:8081/get-profile/8";
    const responseprofile = await fetch(urlprofile);
    const dataprofile = await responseprofile.json();
    this.setState({ profile: dataprofile[1][0], loading: false });
    const urlposition = "http://localhost:8081/get-position/8";
    const responseposition = await fetch(urlposition);
    const dataposition = await responseposition.json();
    this.setState({ position: dataposition[1].position, loading: false });
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.loading || !this.state.task ? (
          <div>Task Not Found</div>
        ) : (
          <div className="ViewTask">
            <Container textAlign="justified">
              <Divider horizontal>
                <Header as="h1">{this.state.task.name}</Header>
              </Divider>

              <Segment color="yellow">
                <Label ribbon="left">
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
                  <Card>
                    <Card.Content>
                      <Card.Header>Sub-Task Name</Card.Header>
                      <Card.Meta>Deadline</Card.Meta>
                      <Card.Meta>Priority</Card.Meta>
                      <Card.Meta>Status</Card.Meta>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header>Sub-Task Name</Card.Header>
                      <Card.Meta>Deadline</Card.Meta>
                      <Card.Meta>Priority</Card.Meta>
                      <Card.Meta>Status</Card.Meta>
                    </Card.Content>
                  </Card>
                </Card.Group>
                <Divider hidden />
                <Divider horizontal>
                  <Header as="h3">Participants</Header>
                </Divider>
                <Divider hidden />
                <Label.Group size="large">
                  <Label as="a" color="blue" image>
                    {this.state.profile.nume} {this.state.profile.prenume}
                    <Label.Detail>{this.state.position}</Label.Detail>
                  </Label>
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
