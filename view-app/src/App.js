import React from "react";
import ViewPlan from "./Components/ViewPlan.js";
import ViewTask from "./Components/ViewTask.js";
import ViewSubTask from "./Components/ViewSubTask.js";
import ProgressButton from "./Components/ProgressButton.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProgressButton />
      </div>
    );
  }
}

export default App;
