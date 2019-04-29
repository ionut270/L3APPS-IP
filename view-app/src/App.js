import React from "react";
import ViewPlan from "./Components/ViewPlan.js";
import ViewTask from "./Components/ViewTask.js";
import ViewSubTask from "./Components/ViewSubTask.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ViewSubTask />
      </div>
    );
  }
}

export default App;
