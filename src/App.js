import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import DefaultTemplate from "./templates/DefaultTemplate";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <DefaultTemplate exact path="/" component={HomePage} />

          <DefaultTemplate exact path="/details" component={DetailPage} />

          <DefaultTemplate component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
