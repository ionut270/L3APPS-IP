import React from "react";
import {
  Container,
  List,
  Tab,
  Segment,
  Grid,
  Header,
  Divider,
  Table
} from "semantic-ui-react";
import MyHeader from "../Header";
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

    var currentUrl = window.location.href.split(/\//)["4"];
    console.log(currentUrl);

    if(currentUrl === undefined){
        //redirect ... 
    } else 
    {
      fetch("http://localhost:8081/get-profile/" + currentUrl)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          name: response[1][0].nume,
          surname: response[1][0].prenume,
          email: response[1][0].email
        });

        fetch("http://localhost:8081/get-position/" + currentUrl)
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
        fetch("http://localhost:8081/get-preferences/" + currentUrl)
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
        fetch("http://localhost:8081/viewUnderlings/" + currentUrl)
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
        alert("You can't view this profile...");
      });
    }
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
                        <Table.Cell href={"localhost:3000/profileof/"+user._id}>{user.email}</Table.Cell>
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

class Profile extends React.Component {
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
          <Segment color="red">
          <ViewProfile />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Profile;
