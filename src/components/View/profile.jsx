import React , { Component } from 'react';
import { Grid, Menu , Container } from 'semantic-ui-react';
import { HashRouter as Router} from "react-router-dom";
// import ProfileInfo from './profileContent/ProfileInfo';
// import EditInfo from './profileContent/EditInfo';
// import TasksInfo from './profileContent/TasksInfo';
import ProfileInfo from './profileContent/ProfileInfo'
import EditInfo from './profileContent/EditInfo'
import TasksInfo from './profileContent/TasksInfo'

class profile extends Component{

    state = { activeItem: 'profile informations' }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });

        console.log(name);
        if(name === "edit informations"){
            document.getElementById("content").innerHTML =document.getElementById("content").innerHTML = '<EditInfo></EditInfo>';
        }
        else if(name === "tasks assigned" ){
            document.getElementById("content").innerHTML = '<TasksInfo></TasksInfo>';
        }
        else if(name === "profile informations" )
        document.getElementById("content").innerHTML = '<ProfileInfo></ProfileInfo>';
        }
        
    render(){
    if (this.props.location.pathname !== "/profile") {
            return null;
        }
    const { activeItem } = this.state;



    return (
        <Router basename="/profile/">
            <Grid>
                <Grid.Column width={4}>
                    <Menu className="menu" fluid vertical tabular >

                        <Menu.Item id="profile" name="profile informations" active={activeItem === 'profile informations'} onClick={this.handleItemClick}/>
                        <Menu.Item id="edit" name="edit informations" active={activeItem === 'edit informations'} onClick={this.handleItemClick}/>
                        <Menu.Item id="tasks" name="tasks assigned" active={activeItem === 'tasks assigned'} onClick={this.handleItemClick}/>

                </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={12}>
        <Container id="content">

        </Container>
        </Grid.Column>
        </Grid>
        </Router>
    );
    }
}

export default profile;