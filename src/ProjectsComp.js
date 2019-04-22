import React, { Component } from "react";
import './proiect.css';
import TasksComp from "./TasksComp";

export default class ProjectsComp extends Component {
    //  projecttasks(){
         
    //      this.props.clicked=true;
    //  }
    render(){
        // var clikedProj = this.props.clicked;
        return (
                <div className="item3">
                    {/* {this.props.clicked} */}
                    {/* <TasksComp clicked={this.props.clicked} /> */}
                    <table style={{width:'100%'}}>
                        <tr>
                            <th className="tablehead2" colSpan="2">Projects</th>
                        </tr>
                        <tr>
                            <th className="firstrow project">
                                <p>Proiect</p></th>
                            <th className="firstrow">
                                <span className="secondcolumn">Due to:</span>
                                <span className="duedate secondcolumn">5/17/2019</span>
                            </th>
                        </tr>
                        <tr>
                            <th className="project" >Proiect</th>
                            <th>
                                <span className="secondcolumn">Due to:</span>
                                <span className="duedate secondcolumn">10/17/2019</span>
                            </th>
                        </tr>
                    </table>
                </div>
        );
    }
}