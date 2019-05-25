import React from "react";
import Underlings from "./Underlings.js";
//import { Redirect } from "react-router-dom";
import {
  Container,
  List,
  Tab,
  Form,
  Segment,
  Grid,
  Header,
  Divider,
  Dropdown,
  Table
} from "semantic-ui-react";
import Cookies from "universal-cookie";
import MyHeader from "../Header";
//import ProgressButton from "./ProgressButton.js";
import axios from "axios";
//const baseurl = "http://localhost:8081";

const baseUrl = "http://localhost:8081";
const prenume = "prenume";
const nume = "nume";
const email = "email";
const parola = "parola";
const morning = "morning";
const evening = "evening";
const afternoon = "afternoon";
const cookies = new Cookies();
const userId = cookies.get("user_id");

const selectOptions = [
  { name: "relaxed", key: "relaxed", text: "Relaxed", value: "relaxed" },
  { name: "focused", key: "focused", text: "Focused", value: "focused" },
  { name: "tired", key: "fired", text: "Tired", value: "tired" }
];

class ViewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      surname: "",
      email: "",
      job: "",
      employees: [],
      morning: "",
      evening: "",
      noon: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/get-profile/" + cookies.get("user_id"))
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log("response is", response[1][0]);
        this.setState({
          name: response[1][0].nume,
          surname: response[1][0].prenume,
          email: response[1][0].email
        });

        fetch("http://localhost:8081/get-preferences/" + cookies.get("user_id"))
          .then(responsee1 => {
            return responsee1.json();
          })
          .then(responsee1 => {
            console.log("prefferences:", responsee1[0].exitCode);
            this.setState({
              morning: responsee1[1][0].morning,
              evening: responsee1[1][0].evening,
              noon: responsee1[1][0].afternoon
            });
          });

        //il punem in state
        fetch("http://localhost:8081/viewUnderlings/" + cookies.get("user_id"))
          .then(responsee => {
            return responsee.json();
          })
          .then(responsee => {
            this.setState({
              employees: response[1]
            });
          });
      })
      .then(res => {
        fetch("http://localhost:8081/get-position/" + cookies.get("user_id"))
          .then(res => {
            return res.json();
          })
          .then(res => {
            if (res[0].exitCode === 0) {
              this.setState({
                job: "undefined"
              });
            } else {
              this.setState({
                job: res[1].position
              });
            }
          });
      }) //aaa
      .then(res => {
        fetch("http://localhost:8081/viewUnderlings/" + cookies.get("user_id"))
          .then(res => {
            return res.json();
          })
          .then(res => {
            console.log("underling:", res[1].underlings);
            if (res[1].underlings != null)
              this.setState({
                employees: res[1].underlings
              });
            this.forceUpdate();
          });
      })
      .catch(err => {
        alert("No profile's for you !");
      });
  }
  render() {
    return (
      <Tab.Pane>
        <Container textAlign="justified">
          <Grid>
            <Grid.Row>
              {/* <Grid.Column width={5} textAlign="center">
                                <Image
                                    src="https://steamuserimages-a.akamaihd.net/ugc/960838928914191885/31FF51C2135DAD7CB3BF2A2F2142DF0D2177A113/?imw=1024&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                                    alt="avatar"
                                    size="small"
                                    centered
                                />
                            </Grid.Column> */}

              <Grid.Column className="profileData">
                {/* <Divider hidden /> */}
                <Segment.Group>
                  <Segment>
                    <Header as="h4">Name : {this.state.name}</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">Surname: {this.state.surname}</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">Email : {this.state.email}</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">Job : {this.state.job} </Header>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row>
                            <Grid.Column>
                                <Header as="h4" attached="top">
                                    Your Tasks
                                </Header>
                                <Segment color="red" secondary attached>
                                    Planurile tale
                                </Segment>
                            </Grid.Column>
                        </Grid.Row> */}

            <Grid.Row>
              <Grid.Column>
                <Header as="h4" attached="top">
                  Preferences
                </Header>
                <Segment color="green" secondary attached>
                  <List horizontal divided relaxed>
                    <List.Item>
                      <List.Content>Morning: {this.state.morning}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>Evening: {this.state.evening}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>Noon: {this.state.noon}</List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Table celled color="teal">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Employee</Table.HeaderCell>
                    <Table.HeaderCell>Job</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                {this.state.employees.map(user => {
                  return (
                    <Table.Body key={user.ID}>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.job}</Table.Cell>
                    </Table.Body>
                  );
                })}
                {/* {listEmployees} */}
              </Table>
            </Grid.Row>
          </Grid>
        </Container>
      </Tab.Pane>
    );
  }
}

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prenume: "",
      nume: "",
      email: "",
      parola: "",
      morning1: "",
      eroare: "",
      morning: ""
    };
    axios.get(`${baseUrl}/get-profile/${userId}`).then(response => {
      this.setState({
        prenume: response.data[1][0].prenume,
        nume: response.data[1][0].nume,
        email: response.data[1][0].email
      });
    });
  }
  changeHandler = e => {
    console.log("target:", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    this.forceUpdate();
  };
  componentDidUpdate() {
    for (let property in this.state) {
      if (this.state[property]) {
        axios
          .get(
            `${baseUrl}/edit-profile/${userId}/${property}/${
            this.state[property]
            }`
          )
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }

    }
    console.log(
      `${baseUrl}/edit-preferences/${userId}/${morning}/${this.state.morning1}`
    );
    fetch("http://localhost:8081/edit-preferences/" + cookies.get("user_id") + "/morning/" + this.morning)//localhost:8081/edit-preferences/20/morning/tired
      .then(res => {
        return res.json();
      }).then(res => {
        console.log("prefferences response:", res)

      })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`${baseUrl}/edit-profile/${userId}/${prenume}/${this.state.prenume}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(`${baseUrl}/edit-profile/${userId}/${nume}/${this.state.nume}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(`${baseUrl}/edit-profile/${userId}/${email}/${this.state.email}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(`${baseUrl}/edit-profile/${userId}/${parola}/${this.state.parola}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    // axios
    //   .get(
    //     `${baseUrl}/edit-preferences/${userId}/${morning}/${
    //       this.state.morning1
    //     }`
    //   )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
  render() {
    const { prenume, nume, email, parola, morning1 } = this.state;
    return (
      <Tab.Pane>
        {" "}
        <Container textAlign="justified">
          <Form onSubmit={this.handleSubmit}>
            <Segment.Group>
              <Segment color="red">
                <Header as="h4">Change First Name:</Header>
                <div className="ui fluid icon input">
                  <i aria-hidden="true" className="users icon" />
                  <input
                    name="prenume"
                    type="text"
                    value={prenume}
                    placeholder="Change First Name..."
                    onChange={this.changeHandler}
                  />
                </div>
              </Segment>

              <Segment color="red">
                <Header as="h4">Change Last Name:</Header>
                <div className="ui fluid icon input">
                  <i aria-hidden="true" className="users icon" />
                  <input
                    name="nume"
                    type="text"
                    value={nume}
                    placeholder="Change Last Name..."
                    onChange={this.changeHandler}
                  />
                </div>
              </Segment>
              <Segment color="red">
                <Header as="h4">Change Email:</Header>
                <div className="ui fluid icon input">
                  <input
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Change Email..."
                    onChange={this.changeHandler}
                  />
                  <i aria-hidden="true" className="mail icon" />
                </div>
              </Segment>
              <Segment color="red">
                <Header as="h4">Change Password:</Header>
                <div className="ui fluid icon input">
                  <input
                    name="parola"
                    type="password"
                    value={parola}
                    placeholder="Change Password..."
                    onChange={this.changeHandler}
                  />
                  <i aria-hidden="true" className="lock icon" />
                </div>
              </Segment>

              <Header as="h4" attached="top">
                Difficulty
              </Header>
              <Segment attached color="red">
                <List divided relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header>Morning</List.Header>
                      <Dropdown
                        name="morning"
                        placeholder="Select Difficulty"
                        fluid
                        selection
                        options={selectOptions}
                        onChange={this.state.morning = "relaxed"}
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
                        onChange={this.changeHandler}
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
            </Segment.Group>
          </Form>
        </Container>
      </Tab.Pane>
    );
  }
}
class Profile extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  redirectToUnderlings = () => {
    this.props.history.push("/underling");
  };
  render() {
    return (
      <div
        className="Profile"
        onLoad={() => {
          console.log("Profile");
        }}
      >
        <MyHeader />
        <Divider hidden />

        <Container textAlign="justified">
          <button
            class="ui fluid button red"
            onClick={() => {
              this.redirectToUnderlings();
            }}
          >
            View Underlings
          </button>
          <Segment color="red">
            <Tab
              menu={{ secondary: true, pointing: true }}
              panes={[
                {
                  menuItem: "Profile Information",
                  render: () => <ViewProfile />
                },
                {
                  menuItem: "Edit Information",
                  render: () => <EditProfile />
                }
              ]}
            />{" "}
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Profile;
