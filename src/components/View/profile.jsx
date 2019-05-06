import React , { Component } from 'react';
import { Grid, Menu , Container, Image, List } from 'semantic-ui-react';
import { HashRouter as Router} from "react-router-dom";
import './profileContent/profile.css';

class profile extends Component{

    state = { activeItem: 'profile informations' }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });

        console.log(name);
        // if(name === "edit informations"){
        //     // document.getElementByClassName("content").innerHTML =document.getElementById("content").innerHTML = '<EditInfo></EditInfo>';
        //     return (<h1>TEXT RANDOM</h1>)
        // }
        // else if(name === "tasks assigned" ){
        //     document.getElementById("content").innerHTML = '<TasksInfo></TasksInfo>';
        // }
        // else if(name === "profile informations" )
        // document.getElementById("content").innerHTML = '<ProfileInfo></ProfileInfo>';

    }
        
    render(){
    if (this.props.location.pathname !== "/profile") {
            return null;
        }
    const { activeItem } = this.state;

    var ChangeComponent = (props) =>{
    if(this.state.activeItem === 'profile informations')
    return(
        <Grid>
            <Grid.Column width={4}>
            <Image src='./images/img_avatar.png'></Image>
            </Grid.Column>
            <Grid.Column width={8}>
                <List>
                    <List.Item>Full name:</List.Item>
                    <List.Item>Age:</List.Item>
                    <List.Item>Description:</List.Item>
                </List>
            </Grid.Column>
        </Grid>
    );
    else if(this.state.activeItem === 'edit informations')
    return(
        <h1>asda</h1>
    );
    else if(this.state.activeItem === 'tasks assigned')
    return(
        <h1>asddasdaa</h1>
    );
    }

    return (
        <Router basename="/profile/">
            <Grid className="profileContent">
                <Grid.Column width={4}>
                    <Menu className="menu" fluid vertical tabular >

                        <Menu.Item id="profile" name="profile informations" active={activeItem === 'profile informations'} onClick={this.handleItemClick}/>
                        <Menu.Item id="edit" name="edit informations" active={activeItem === 'edit informations'} onClick={this.handleItemClick}/>
                        <Menu.Item id="tasks" name="tasks assigned" active={activeItem === 'tasks assigned'} onClick={this.handleItemClick}/>

                </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={12}>
        <Container className="content">
        <ChangeComponent name = "profile" onClick></ChangeComponent>
        </Container>
        </Grid.Column>
        </Grid>
        </Router>
    );
    }
}

export default profile;