import React, { Component } from "react";
import './proiect.css';

export default class ProjectsComp extends Component {
    render(){
        
        return (
                <div className="item3">
                    <table style={{width:'100%'}}>
                        <tr>
                            <th className="tablehead2" colspan="2">Projects</th>
                        </tr>
                        <tr>
                            <th className="firstrow project">Proiect</th>
                            <th className="firstrow">
                                <span className="secondcolumn">Due to:</span>
                                <span className="duedate secondcolumn">5/17/2019</span>
                            </th>
                        </tr>
                        <tr>
                            <th className="project">Proiect</th>
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