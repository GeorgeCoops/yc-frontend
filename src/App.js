import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./css/App.module.css";
import "./css/all.css";

import NavBar from "./Components/NavBar";

import AboutContainer from "./Containers/AboutContainer";
import JobSearchContainer from "./Containers/JobSearchContainer";
import ArticlesContainer from "./Containers/ArticlesContainer";
import PostContainer from "./Containers/PostContainer";
import AdminPage from "./admin/AdminPage";
import AdminLogIn from "./admin/AdminLogIn";

export default class App extends Component {
  render() {
    return (
      <div className={styles.appBasic}>
        <Router>
          <NavBar />
          <br></br>
          <Route exact path="/" component={() => <JobSearchContainer />} />
          {/* <Route
            exact
            path="/creatives"
            component={() => <ArticlesContainer />}
          /> */}
          <Route exact path="/post" component={() => <PostContainer />} />
          <Route exact path="/about" component={() => <AboutContainer />} />
          <Route exact path="/admin/login" component={() => <AdminLogIn />} />
          <Route exact path="/admin" component={() => <AdminPage />} />
        </Router>
      </div>
    );
  }
}
