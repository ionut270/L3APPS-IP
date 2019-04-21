import React, { Component } from "react";
import './proiect.css';

import ScheduleComp from "./ScheduleComp";
import TasksComp from "./TasksComp";
import ProjectsComp from "./ProjectsComp";

export default class Layout extends Component {
    render(){
        return (
            <div>
            <div className="grid-container">
                <ScheduleComp />
                <TasksComp />
                <ProjectsComp />
            </div>
            </div>
        );
    }
}

