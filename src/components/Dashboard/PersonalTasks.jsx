import React, { Component } from "react";
import { Divider, Segment, Icon, List, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { withRouter } from "react-router-dom";
//import faker from "faker";

import Cookies from "universal-cookie";
const baseUrl = "http://vvtsoft.ddns.net:5123/tasks";
class PersonalTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  cookies = new Cookies();
  myUserId = this.cookies.get("user_id");
  componentDidMount() {
    fetch("http://localhost:8081/tasks")
      .then(res => {
        return res.json();
      })
      .then(res => {
        //this.state.tasks = res;
        this.setState({
          tasks: res.reverse().filter(element => {
            if (element.participants) {
              if (element.participants.find(el => el._id === this.myUserId)) {
                return element;
              }
            }
          })
        });
        this.forceUpdate();
      });
  }

  deleteTask(param, e) {
    window.location.reload();
    console.log(param);
    return fetch(baseUrl + "/" + param, {
      method: "delete"
    }).then(response => response.json());
  }
  rearrenge = () => {
    window.location.reload();
    let sortedTasks = this.state.tasks;
    sortedTasks = sortedTasks.sort((a, b) => {
      if (
        a.status.toLowerCase() === "not started" &&
        b.status.toLowerCase() !== "not started"
      ) {
        return -1;
      } else if (
        a.status.toLowerCase() === "starting" &&
        b.status.toLowerCase() !== "not started" &&
        b.status.toLowerCase() !== "starting"
      ) {
        return -1;
      } else if (
        a.status.toLowerCase() === "doing" &&
        b.status.toLowerCase() !== "not started" &&
        b.status.toLowerCase() !== "starting" &&
        b.status.toLowerCase() !== "doing"
      ) {
        return -1;
      } else if (
        a.status.toLowerCase() === "done" &&
        b.status.toLowerCase() !== "not started" &&
        b.status.toLowerCase() !== "starting" &&
        b.status.toLowerCase() !== "doing" &&
        b.status.toLowerCase() !== "done"
      ) {
        return -1;
      } else if (
        a.status.toLowerCase() === "finished" &&
        b.status.toLowerCase() !== "not started" &&
        b.status.toLowerCase() !== "starting" &&
        b.status.toLowerCase() !== "doing" &&
        b.status.toLowerCase() !== "done" &&
        b.status.toLowerCase() !== "finished"
      ) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ tasks: sortedTasks });
  };

  deleteTasks = e => {
    window.location.reload();
    this.state.tasks.map(data => {
      return fetch(baseUrl + "/" + data._id, {
        method: "delete"
      }).then(response => response.json());
    });
  };
  // redirectToEditTask(param, e) {
  //   this.props.history.push({
  //     pathname: "/edittask",
  //     state: { id: param }
  //   });
  // }

  render() {
    return (
      <div className="dashSubtask">
        <Segment color="red">
          {/* <Header as="h3">
						<Dropdown placeholder="Today" fluid selection options={options} />
					</Header> */}
          <Button icon labelPosition="right" onClick={this.rearrenge}>
            <Icon name="redo" />
            Rearrange
          </Button>
          <Button icon labelPosition="right">
            <Icon name="warning sign" />
            Report
          </Button>
          <Button
            type="submit"
            floated="right"
            color="red"
            onClick={this.deleteTasks}
          >
            Delete all tasks
          </Button>
          <Divider section />
          <List divided relaxed>
            {this.state.tasks.map(data => {
              const url = "/task/" + data._id;
              return (
                <List.Item>
                  <List.Icon name="cogs" size="large" verticalAlign="middle" />

                  <Button
                    type="submit"
                    floated="right"
                    color="red"
                    onClick={this.deleteTask.bind(this, data._id)}
                  >
                    X
                  </Button>

                  <List.Content href={url}>
                    <Segment.Group horizontal basic>
                      <Segment basic>{data.name}</Segment>
                      <Segment basic>Due date: {data.deadline}</Segment>
                      <Segment basic>Status: {data.status}</Segment>
                    </Segment.Group>
                    <List.Header as="a">{data.description}</List.Header>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Segment>
      </div>
    );
  }
}

export default withRouter(PersonalTask);
