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
  render() {
    return (
      <div className="ViewTask">
        <Container textAlign="justified">
          <Divider horizontal>
            <Header as="h1">Nume Task</Header>
          </Divider>

          <Segment color="yellow">
            <Label ribbon="left">
              <Header as="h1">Priority</Header>
            </Label>

            <Divider horizontal>
              <Segment.Group horizontal>
                <Responsive as={Segment}>Departament</Responsive>
                <Responsive as={Segment}>Deadline</Responsive>
                <Responsive as={Segment}>Category</Responsive>
              </Segment.Group>
            </Divider>
            <Divider horizontal>
              <Segment>
                <Header as="h4">Creator</Header>
              </Segment>
            </Divider>
            <Divider hidden />
            <Progress percent={60} active progress color="yellow">
              Progress
            </Progress>
            <Divider hidden />
            <Divider horizontal>
              <Header as="h3">Description</Header>
            </Divider>
            <Divider hidden />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
              elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
              leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi.
            </p>

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
              <Header as="h3">Depends on</Header>
            </Divider>
            <Divider hidden />
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>Task Name</Card.Header>
                  <Card.Meta>Deadline</Card.Meta>
                  <Card.Meta>Priority</Card.Meta>
                  <Card.Meta>Status</Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Card.Header>Task Name</Card.Header>
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
                <img src={require("./avatar.png")} alt="avatar" />
                Veronika
                <Label.Detail>Scrum</Label.Detail>a{" "}
              </Label>
              <Label as="a" color="teal" image>
                <img src={require("./avatar.png")} alt="avatar" />
                Veroni
                <Label.Detail>Scrum Master</Label.Detail>
              </Label>
              <Label as="a" color="yellow" image>
                <img src={require("./avatar.png")} alt="avatar" />
                Helen
                <Label.Detail>Scrum</Label.Detail>
              </Label>
            </Label.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default ViewTask;
