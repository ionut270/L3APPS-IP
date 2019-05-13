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
  Dropdown,
  Modal
} from "semantic-ui-react";
import ProgressButton from "./ProgressButton.js";
const selectOptions = [
  {
    key: "Relaxed",
    text: "Relaxed",
    value: "Relaxed"
  },
  {
    key: "Focused",
    text: "Focused",
    value: "Focused"
  },
  {
    key: "Tired",
    text: "Tired",
    value: "Tired"
  }
];
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
                  src={require("./avatar.png")}
                  alt="avatar"
                  size="small"
                  centered
                />
                <Segment.Group>
                  <Segment>
                    <Header as="h4">Ongoing tasks:</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">Done tasks:</Header>
                  </Segment>
                </Segment.Group>
              </Grid.Column>

              <Grid.Column width={11}>
                <Divider hidden />
                <Segment.Group>
                  <Segment>
                    <Header as="h4">Username :</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">UserID:</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">Email:</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">Profile Description:</Header>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as="h4" attached="top">
                  Your Plans
                </Header>
                <Segment color="red" secondary attached>
                  Planurile tale
                </Segment>
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
    render: () => (
      <Tab.Pane>
        {" "}
        <Container textAlign="justified">
          <Segment.Group>
            <Segment secondary color="red">
              <Header as="h4">Change Username:</Header>
              <div class="ui fluid icon input">
                <i aria-hidden="true" class="users icon" />
                <input type="text" placeholder="Change Username..." />
              </div>
            </Segment>
            <Segment secondary color="red">
              <Header as="h4">Change Email:</Header>
              <div class="ui fluid icon input">
                <input type="text" placeholder="Change Email..." />
                <i aria-hidden="true" class="mail icon" />
              </div>
            </Segment>

            <Segment secondary color="red">
              {" "}
              <Header as="h4">Change Description:</Header>
              <form class="ui form ">
                <textarea placeholder="Change Description..." rows="3" />
              </form>
            </Segment>

            <Segment color="red" secondary>
              <Grid>
                <Grid.Column width={8}>
                  <Header as="h4" attached="top">
                    Difficulty
                  </Header>
                  <Segment attached color="red">
                    <List divided relaxed>
                      <List.Item>
                        <List.Content>
                          <List.Header>Morning</List.Header>
                          <Dropdown
                            placeholder="Select Difficulty"
                            fluid
                            selection
                            options={selectOptions}
                          />
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Afternoon</List.Header>
                          <Dropdown
                            placeholder="Select Difficulty"
                            fluid
                            selection
                            options={selectOptions}
                          />
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Evening</List.Header>
                          <Dropdown
                            placeholder="Select Difficulty"
                            fluid
                            selection
                            options={selectOptions}
                          />
                        </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h4" attached="top">
                    Job
                  </Header>
                  <Segment attached color="red">
                    <List divided relaxed>
                      <List.Item>
                        <List.Content>
                          <List.Header>Job Name</List.Header>
                          <div class="ui fluid icon input">
                            <input
                              type="text"
                              placeholder="Change Job Name..."
                            />
                          </div>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Function</List.Header>
                          <div class="ui fluid icon input">
                            <input
                              type="text"
                              placeholder="Change Function..."
                            />
                          </div>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Category</List.Header>
                          <div class="ui fluid icon input">
                            <input
                              type="text"
                              placeholder="Change Category..."
                            />
                          </div>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
          </Segment.Group>
        </Container>
      </Tab.Pane>
    )
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
