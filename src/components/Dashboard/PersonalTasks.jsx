import React, { Component } from "react";
import { Divider, Segment, Icon, Button, Label, Header, Card, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { withRouter } from "react-router-dom";
//import faker from "faker";

import Cookies from "universal-cookie";
const baseUrl = "http://localhost:8081/tasks";
class PersonalTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
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
						return null;
					}),
				});
				this.forceUpdate();
      })
      .catch(res=>{
        console.log(res);
      })
	}

	deleteTask(param, e) {
    // if(param["sub-tasks"].length === 0)
    //     window.location.reload();
		return fetch(baseUrl + "/" + param._id, {
			method: "delete",
    }).then(response => {
			response.json()
		})
		.then(res=>{
			if(param["sub-tasks"].length === 0){
				window.location.reload();
			}
			for(let i  = 0; i < param["sub-tasks"].length; i++) {
        fetch(baseUrl + "/" + param["sub-tasks"][i]._id, {
          method: "delete",
        })
        .then(
          e => {
            console.log("Delete sub-tasks succesfull", e);
            if(i === param["sub-tasks"].length-1) {
                window.location.reload();
            }
          }
          
        )
        .catch(
          e => {
            console.log("Exception delete sub-tasks", e);
          }
        )
    }
		})
    .catch(e => {console.log("Exception deleting task")});
	}
	rearrenge = () => {
		window.location.reload();
		let sortedTasks = this.state.tasks;
		sortedTasks = sortedTasks.sort((a, b) => {
			if (a.status.toLowerCase() === "not started" && b.status.toLowerCase() !== "not started") {
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
				method: "delete",
      }).then(response => response.json())
      .catch(res=>{
        console.log(res);
      })
		});
	};
	redirectToEditTask(param, e) {
		this.props.history.push({
			pathname: "/edittask",
			state: { id: param },
		});
	}

	render() {
		return (
			<Container justified="true">
				<Segment color="red">
					<Button icon labelPosition="right" onClick={this.rearrenge}>
						<Icon name="redo" />
						Rearrange
					</Button>
					{/* <Button icon labelPosition="right">
						<Icon name="warning sign" />
						Report
					</Button> */}
					<Button type="submit" floated="right" color="red" onClick={this.deleteTasks}>
						Delete all tasks
					</Button>
					<Divider section />
					<Card.Group>
						{this.state.tasks.map(data => {
							const url = "/task/" + data._id;
							//console.log(data);
							var color;
							if (data.status === "Done") {
								color = "green";
							} else if (data.status === "Doing") {
								color = "yellow";
							} else if (data.status === "Starting") {
								color = "teal";
							} else if (data.status === "Postponed") {
								color = "red";
							}
							return (
								<Card fluid key={data._id}>
									<Card.Content textAlign="center">
										<Label className="CenteredTagTaskPage">
											<Header as="h3">{data.priority}</Header>
										</Label>
										<Card.Header href={url}>{data.name}</Card.Header>
									</Card.Content>
									<Card.Content>
										<Card.Meta textAlign="center">
											Departament:<strong> {data.department}</strong> Category: <strong>{data.category}</strong>{" "}
											Deadline: <strong>{data.deadline}</strong>
										</Card.Meta>
										<Card.Description>
											<Segment>
												<Header as="h4">Description</Header> {data.description}
											</Segment>
										</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Label color={color}>Status: {data.status}</Label>
										<Button.Group floated="right">
											<Button type="submit" color="green" onClick={this.redirectToEditTask.bind(this, data._id)}>
												Edit
											</Button>
											<Button.Or />
											<Button type="submit" color="red" onClick={this.deleteTask.bind(this, data)}>
												X
											</Button>
										</Button.Group>
									</Card.Content>
								</Card>
							);
						})}
					</Card.Group>
				</Segment>
			</Container>
		);
	}
}

export default withRouter(PersonalTask);
