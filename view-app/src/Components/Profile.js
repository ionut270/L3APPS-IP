import React from "react";
import {
  Button,
  Container,
  List,
  Tab,
  Image,
  Segment,
  Grid,
  Header,
  Divider,
  Progress,
  Modal
} from "semantic-ui-react";
import ProgressButton from "./ProgressButton.js";
const panes = [
  {
    menuItem: "Profile Information",
    render: () => (
      <Tab.Pane>
        <Container textAlign="justified">
          <Grid>
            <Grid.Row>
              <Grid.Column width={5} textAlign="center">
                <Image
                  src={require("./avatar.jpg")}
                  alt="avatar"
                  size="small"
                  centered
                  circular
                />
                <Segment color="red" secondary>
                  <Header as="h4">Ongoing tasks:</Header>
                  <Header as="h4">Done tasks:</Header>
                </Segment>
              </Grid.Column>

              <Grid.Column width={11}>
                <Divider hidden />
                <Container textAlign="left">
                  <Header as="h4">Username :</Header>
                  <Divider />
                  <Header as="h4">UserID:</Header>
                  <Divider />
                  <Header as="h4">Email:</Header>
                  <Divider />
                  <Header as="h4">Profile Description:</Header>
                </Container>
                <Divider />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header as="h4" attached="top">
                  Job
                </Header>
                <Segment color="red" secondary attached>
                  <List divided relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header>Job Name</List.Header>
                        Nume aici
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Function</List.Header>
                        Functie aici
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Category</List.Header>Categorie aici
                      </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column width={11}>
                {" "}
                <Header as="h4" attached="top">
                  Difficulty
                </Header>
                <Segment color="red" secondary attached>
                  <List divided relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header>Morning</List.Header>
                        Focused
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Afternoon</List.Header>
                        Tired
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Evening</List.Header>
                        Relaxed
                      </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2}>
                <ProgressButton />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Edit Information",
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Task Assigned",
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
  }
];
class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Divider hidden />
        <Container textAlign="justified">
          <Segment color="red">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Profile;
