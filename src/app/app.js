import React from "react";
import "./App.scss";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import Router, { Navigation } from "./components/router";

const App = () => {
  return (
    <div className="App App-body">
      <ReactRouter>
        <Navigation />
        <Router />
      </ReactRouter>
    </div>
  );
};

export default App;
