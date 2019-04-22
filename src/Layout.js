import React, { Component } from "react";
import './proiect.css';

import ScheduleComp from "./ScheduleComp";
import TasksComp from "./TasksComp";
import ProjectsComp from "./ProjectsComp";

export default class Layout extends Component {
    // constructor(){
    //     super();
    //     this.state = {clicked: false};
    // }    
    render(){
       
        return (
            <div>
                <button>(Re)Arrange Tasks</button>
                <div className="grid-container">
                    <ScheduleComp />
                    <TasksComp />
                    <ProjectsComp />
                </div>
            </div>
        );
    }
}

