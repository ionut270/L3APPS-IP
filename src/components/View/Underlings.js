import React from "react";
import { Divider, Container, Segment, List, Header } from "semantic-ui-react";
import Cookies from "universal-cookie";
import MyHeader from "../Header";
import axios from "axios";
const baseUrl = "http://localhost:8081";
const prenume = "prenume";
const nume = "nume";
const email = "email";
const parola = "parola";

const cookies = new Cookies();
const userId = cookies.get("user_id");

class Underlings extends React.Component {
  state = {
    nume: null,
    job: null,
    jobs: [],
    profile: [],
    arr: []
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:8081/viewUnderlings/3");
    const data = await response.json();
    if (data[1].underlings === null) this.setState({ jobs: "1" });
    else this.setState({ jobs: data[1].underlings });

    for (let i = 0; i < this.state.jobs.length; i++) {
      const url = "http://localhost:8081/get-profile/21";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ profile: data[1][0] });
      var newArray = this.state.arr.slice();
      newArray.push(this.state.profile.nume);
      this.setState({ arr: newArray });
    }
    this.setState({ profile: newArray });
  }

  render() {
    return (
      <div>
        {" "}
        <MyHeader />
        <Divider hidden />
        <Container textAlign="center">
          <Segment inverted attached>
            <Header as="h2" inverted color="Blue">
              My Underlings
            </Header>
            <List divided inverted relaxed>
              {this.state.jobs.map(title => (
                <div key={title.ID}>
                  <Divider />
                  <List.Item>
                    <List.Content>
                      <List.Header>Email: {title.email}</List.Header>
                      Job: {title.job}
                    </List.Content>
                  </List.Item>
                </div>
              ))}
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Underlings;
