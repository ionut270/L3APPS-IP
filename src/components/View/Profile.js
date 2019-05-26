import React from "react";
//import { Redirect } from "react-router-dom";
import {
  Container,
  List,
  Tab,
  Input,
  Form,
  Segment,
  Grid,
  Header,
  Button,
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
      noon: "",
      superiorId: "",
      underlingId: "",
      underlingPos: "",
      underlingIdDelete: "",
      underlingIdChange: "",
      underlingPosChange: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/get-profile/" + cookies.get("user_id"))
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          name: response[1][0].nume,
          surname: response[1][0].prenume,
          email: response[1][0].email
        });

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
          })
          .catch(res => {
            console.log(res);
          });

        //we fetch the rest then
        fetch("http://localhost:8081/get-preferences/" + cookies.get("user_id"))
          .then(res => {
            if (res.status !== 404) {
              return res.json();
            }
          })
          .then(res => {
            if (res[0] === undefined || res[0] === null || res[0] === "") {
              this.setState({
                morning: "unset",
                evening: "unset",
                noon: "unset"
              });
            } else {
              this.setState({
                morning: res[1][0].morning,
                evening: res[1][0].evening,
                noon: res[1][0].afternoon
              });
            }
          })
          .catch(res => {
            console.log("ERR returning preferences");
          });
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
          })
          .catch(res => {
            console.log(res);
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
              <Grid.Column className="profileData">
                <Segment.Group>
                  <Segment>
                    <Header as="h4">Last Name : {this.state.name}</Header>
                  </Segment>
                  <Segment>
                    <Header as="h4">First Name: {this.state.surname}</Header>
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
            {this.state.job === "HR" ? (
              <Grid.Row>
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment textAlign="center" color="red">
                      <Header as="h3">Add underling</Header>
                      <Divider />
                      <List.Item>
                        <List.Content>Superior ID</List.Content>
                        <Input
                          fluid
                          value={this.state.superiorId}
                          onChange={e => {
                            this.setState({
                              superiorId: e.target.value
                            });
                          }}
                          type="number"
                          min="1"
                        />
                      </List.Item>
                      <List.Item>
                        <List.Content>Underling ID</List.Content>
                        <Input
                          fluid
                          value={this.state.underlingId}
                          onChange={e => {
                            this.setState({
                              underlingId: e.target.value
                            });
                          }}
                          type="number"
                          min="1"
                        />
                      </List.Item>
                      <List.Item>
                        <List.Content>Underling Position</List.Content>
                        <Input
                          fluid
                          value={this.state.underlingPos}
                          onChange={e => {
                            this.setState({
                              underlingPos: e.target.value
                            });
                          }}
                          type="text"
                        />
                      </List.Item>
                      <Divider hidden />
                      <Button
                        color="google plus"
                        onClick={() => {
                          //request with data
                          //console.log(this.state);
                          // window.location.reload();
                          window.location.reload();
                          this.setState({
                            loading: true,
                            buttonColor: "gray"
                          });
                          fetch(
                            "http://localhost:8081/add-underling/" +
                            this.state.underlingId +
                            "/" +
                            this.state.superiorId +
                            "/" +
                            this.state.underlingPos
                          );
                        }}
                      >
                        Add Underling
                      </Button>
                    </Segment>
                    <Segment textAlign="center" color="red">
                      <Header as="h3">Remove underling</Header>
                      <Divider />
                      <List.Item>
                        <List.Content>Underling ID</List.Content>
                        <Input
                          fluid
                          value={this.state.underlingIdDelete}
                          onChange={e => {
                            this.setState({
                              underlingIdDelete: e.target.value
                            });
                          }}
                          type="number"
                          min="1"
                        />
                      </List.Item>
                      <Divider hidden />
                      <Button
                        color="google plus"
                        onClick={() => {
                          //request with data
                          //console.log(this.state);
                          // window.location.reload();
                          window.location.reload();
                          this.setState({
                            loading: true,
                            buttonColor: "gray"
                          });
                          fetch(
                            "http://localhost:8081/remove-underling/" +
                            this.state.underlingIdDelete
                          );
                        }}
                      >
                        Remove Underling
                      </Button>
                    </Segment>
                    <Segment textAlign="center" color="red">
                      <Header as="h3">Change position</Header>
                      <Divider />
                      <List.Item>
                        <List.Content>Underling ID</List.Content>
                        <Input
                          fluid
                          value={this.state.underlingIdChange}
                          onChange={e => {
                            this.setState({
                              underlingIdChange: e.target.value
                            });
                          }}
                          type="number"
                          min="1"
                        />
                      </List.Item>
                      <List.Item>
                        <List.Content>Underling Position</List.Content>
                        <Input
                          fluid
                          value={this.state.underlingPosChange}
                          onChange={e => {
                            this.setState({
                              underlingPosChange: e.target.value
                            });
                          }}
                          type="text"
                        />
                      </List.Item>
                      <Divider hidden />
                      <Button
                        color="google plus"
                        onClick={() => {
                          //request with data
                          //console.log(this.state);
                          window.location.reload();

                          this.setState({
                            loading: true,
                            buttonColor: "gray"
                          });
                          fetch(
                            "http://localhost:8081/change-position/" +
                            this.state.underlingIdChange +
                            "/" +
                            this.state.underlingPosChange
                          );
                        }}
                      >
                        Change Position
                      </Button>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            ) : null}
            <Grid.Row>
              <Table celled color="teal">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Employee</Table.HeaderCell>
                    <Table.HeaderCell>Job</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.employees.map(user => {
                    return (
                      <Table.Row key={user.email}>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.job}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
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
      eroare: ""
    };
    this.state1 = {
      morning: "",
      noon: "",
      evening: ""
    };
    axios.get(`${baseUrl}/get-profile/${userId}`).then(response => {
      this.setState({
        prenume: response.data[1][0].prenume,
        nume: response.data[1][0].nume,
        email: response.data[1][0].email
      });
    });
  }

  changeHandlerMorning = e => {
    console.log("here", e.target.getAttribute("name"));
    this.state1.morning = e.target.getAttribute("name");
    this.forceUpdate();
    console.log("here!!!", this.state);
  };
  changeHandlerEvening = e => {
    this.state1.evening = e.target.getAttribute("name");
    this.forceUpdate();
    console.log(this.state);
  };
  changeHandlerNoon = e => {
    this.state1.noon = e.target.getAttribute("name");
    this.forceUpdate();
    console.log(this.state);
  };
  changeHandler = e => {
    console.log("target:", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    this.forceUpdate();
  };
  // componentDidUpdate() {
  // for (let property in this.state) {
  //   if (this.state[property]) {
  //     axios
  //       .get(
  //         `${baseUrl}/edit-profile/${userId}/${property}/${
  //           this.state[property]
  //         }`
  //       )
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }
  //}

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
    fetch(
      "http://localhost:8081/get-preferences/" +
      cookies.get("user_id"))
      .then(resursa => {
        return resursa.json();
      })
      .then(resursa => {
        if (resursa.exitCode === 0) {
          fetch(
            "http://localhost:8081/add-preferences/" +
            cookies.get("user_id") +
            "/" + this.state1.morning + "/" + this.state1.evening + "/" + this.state1.noon
          ).then(function (res2) {
            return res2.json();
          });
        }
        else {
          fetch(
            "http://localhost:8081/edit-preferences/" +
            cookies.get("user_id") +
            "/morning/" +
            this.state1.morning
          ) //localhost:8081/edit-preferences/20/morning/tired
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log("prefferences response:", res);
            });
          fetch(
            "http://localhost:8081/edit-preferences/" +
            cookies.get("user_id") +
            "/evening/" +
            this.state1.evening
          ) //localhost:8081/edit-preferences/20/morning/tired
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log("prefferences response:", res);
            });
          fetch(
            "http://localhost:8081/edit-preferences/" +
            cookies.get("user_id") +
            "/afternoon/" +
            this.state1.noon
          ) //localhost:8081/edit-preferences/20/morning/tired
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log("prefferences response:", res);
            });

        }
      });

    alert("Datele au fost schimbate");
  };
  render() {
    const { prenume, nume, email, parola } = this.state;
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
                    title="First name should only contain letters"
                    pattern="[a-zA-Z]+"
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
                    pattern="[a-zA-Z]+"
                    title="Last name should only contain letters"
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
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Invalid format for email"
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
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    placeholder="Change Password..."
                    onChange={this.changeHandler}
                  />
                  <i aria-hidden="true" className="lock icon" />
                </div>
              </Segment>

              <Header as="h4" attached="top">
                Preferences
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
                        onChange={this.changeHandlerMorning}
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
                        onChange={this.changeHandlerNoon}
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
                        onChange={this.changeHandlerEvening}
                      />
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Segment.Group>
            <Button type="submit" onSubmit={this.handleSubmit} positive fluid>
              Confirm
            </Button>
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
          {/* <button
                        class="ui fluid button red"
                        onClick={() => {
                            this.redirectToUnderlings();
                        }}
                    >
                        View Underlings
                    </button> */}
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
