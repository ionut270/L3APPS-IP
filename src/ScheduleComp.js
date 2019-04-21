import React, { Component } from "react";
import './proiect.css';

export default class ScheduleComp extends Component {
    render(){
        return (
                <div className="item1">
                        <table style={{width:'100%'}} cellspacing="0">
                            <tr>
                                <th className="tablehead" colspan="3">
                                    <select id="dayslist">
                                        <option value="today" selected>Today</option>
                                        <option value="tomorrow">Tomorrow</option>
                                        <option value="2daysaftrer">2 days after</option>
                                        <option value="3daysafter">3 days after</option>
                                    </select>
                                </th>
                            </tr>
                            
                            <tr>
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
                                    <span className="secondcolumn">Due to: </span>
                                    <span className="duedate secondcolumn">4/28/2019</span>
                                </th>
                                <th className="status firstrow">
                                    <select className="status">
                                        <option value="todo" selected>To do</option>
                                        <option value="doing">Doing</option>
                                        <option value="done">Done</option>
                                    </select>
                                </th>
                            </tr>
                            <tr className="blank_row">
                                <td colspan="2" className="blankrow">No task gap</td>
                            </tr>
                            <tr>
                                <th>
                                    <p>Nume task</p>
                                    <span className="difficulty">Easy</span>
                                    <span className="priority">Very important</span>
                                    <span>Depends on: </span>
                                    <span className="dependency">alt task</span>
                                    <span className="taskproject">Proiect</span>
                                </th>
                                <th>
                                    <span className="hours secondcolumn">14:00-17:00</span>
                                    <span className="secondcolumn">Due to: </span>
                                    <span className="duedate secondcolumn">4/29/2019</span>
                                </th>
                                <th className="status">
                                    <select className="status">
                                        <option value="todo">To do</option>
                                        <option value="doing" selected>Doing</option>
                                        <option value="done">Done</option>
                                    </select>
                                </th>
                            </tr>
                        </table>
                    </div>
        );
    }
}
