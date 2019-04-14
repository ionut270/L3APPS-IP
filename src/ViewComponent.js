import React, { Component } from 'react';
import './ViewComponent.css';

class View extends Component {
    render() {
      var users = [
        { name: 'Robin' },
        { name: 'Markus' },
      ];
  
      return (
        <ul>
          {users.map(function (user) {
            return <li>{user.name}</li>;
          })}
        </ul>
      );
    }
  }
  
  export default View;