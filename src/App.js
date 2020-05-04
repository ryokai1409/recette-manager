import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainNavigation from "./Shared/Navigation/pages/MainNavigation/MainNavigation";
import MainArea from "./Shared/Pages/MainArea";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <MainNavigation />

          <MainArea />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
