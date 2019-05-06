import React from "react";
import ViewPlan from "./Components/ViewPlan.js";
import ViewTask from "./Components/ViewTask.js";
import ViewSubTask from "./Components/ViewSubTask.js";
import ProgressButton from "./Components/ProgressButton.js";
import Profile from "./Components/Profile.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
