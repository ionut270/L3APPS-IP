import React from "react";
import ViewPlan from "./Components/ViewPlan.js";
import ViewTask from "./Components/ViewTask.js";
import ViewSubTask from "./Components/ViewSubTask.js";

import Profile from "./Components/Profile.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ViewTask />
      </div>
    );
  }
}

export default App;
