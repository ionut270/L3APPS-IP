import React, { Component } from 'react';
import './App.css';
import { DropdownButton , Dropdown} from 'react-bootstrap';
import CreatePlanModal from './Components/CreatePlanModal.js';
import CreateTaskModal from './Components/CreateTaskModal.js';
import CreateSubTaskModal from './Components/CreateSubTaskModal.js';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <DropdownButton id="dropdown-basic-button" size="lg" title="Create button">
<Dropdown.Item ><CreatePlanModal/></Dropdown.Item>
<Dropdown.Item ><CreateTaskModal/></Dropdown.Item>
<Dropdown.Item ><CreateSubTaskModal/></Dropdown.Item>
</DropdownButton>;





      </div>
    );
  }
}

export default App;
