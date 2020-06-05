import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import AboutContainer from "./Containers/AboutContainer";
import JobSearchContainer from "./Containers/JobSearchContainer";
import ArticlesContainer from "./Containers/ArticlesContainer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <br></br>
        <Route exact path="/" component={() => <JobSearchContainer />} />
        <Route
          exact
          path="/creatives"
          component={() => <ArticlesContainer />}
        />
        <Route exact path="/about" component={() => <AboutContainer />} />
      </Router>
    </div>
  );
}

export default App;
