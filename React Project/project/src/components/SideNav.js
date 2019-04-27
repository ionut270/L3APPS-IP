import React , { Component } from 'react';
import '../components/SideNav.css';
import { Segment } from 'semantic-ui-react';
class SideNav extends Component{
    render(){
    return (
    <div className="SideNav">
    <h1>SideNav</h1>
    <Segment>Profile informations</Segment>
    <Segment>Edit informations</Segment>
    <Segment>Tasks asiggned</Segment>
    </div>
    );
    }
}

export default SideNav;