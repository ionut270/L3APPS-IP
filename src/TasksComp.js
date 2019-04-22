import React, { Component } from "react";
import './proiect.css';


export default class TasksComp extends Component {
    isClicked(){
        var unassignedtask, i;
        unassignedtask = document.getElementsByClassName("unassignedtask");
        if(this.props.clicked == true)
            for(i=0; i<unassignedtask.length; i++)
                unassignedtask[i].style.display = "none";
    }
    render(){  
        return (
                <div className="item2">
                    <table style={{width:'100%'}} cellspacing="0">
                        <tr>
                            <th className="tablehead2" colSpan="2">Unassigned tasks/subtasks</th>
                        </tr>
                        <tr className="unassignedtask">
                            <th className="firstrow">
                                <p>Nume task</p>
                                <span className="difficulty">Easy</span>
                                <span className="priority">Very important</span>
                                <span>Depends on: </span>
                                <span className="dependency">alt task</span>
                                <span className="taskproject">Proiect</span>
                            </th>
                            <th className="firstrow">
                                    <span className="hours secondcolumn">9:00-11:00</span>
                                    <span className="secondcolumn">Due to:</span>
                                    <span className="duedate secondcolumn">4/28/2019</span>
                            </th>
                        </tr>
                        <tr className="unassignedtask">
                            <th>
                                <p>Nume task</p>
                                <span className="difficulty">Easy</span>
                                <span className="priority">Very important</span>
                                <span>Depends on: </span>
                                <span className="dependency">alt task</span>
                                <span className="taskproject">Proiect</span>
                            </th>
                            <th>
                                <span className="hours secondcolumn">9:00-11:00</span>
                                <span className="secondcolumn">Due to:</span>
                                <span className="duedate secondcolumn">4/28/2019</span>
                            </th>
                        </tr>
                        <tr className="unassignedtask">
                            <th>
                                <p>Nume task</p>
                                <span className="difficulty">Easy</span>
                                <span className="priority">Very important</span>
                                <span>Depends on: </span>
                                <span className="dependency">alt task</span>
                                <span className="taskproject">Proiect</span>
                            </th>
                            <th>
                                <span className="hours secondcolumn">9:00-11:00</span>
                                <span className="secondcolumn">Due to:</span>
                                <span className="duedate secondcolumn">4/28/2019</span>
                            </th>
                        </tr>
                    </table>
                </div>
        );
    }
}