import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./css/App.module.css";
// import "./css/all.css";

import NavBar from "./Components/NavBar";

import AboutContainer from "./Containers/AboutContainer";
import JobSearchContainer from "./Containers/JobSearchContainer";
import PostContainer from "./Containers/PostContainer";
import AdminPage from "./admin/AdminPage";

export default class App extends Component {
  state = {
    scroll: false,
  };

  changeScrollStatusToLong = () => {
    this.setState({ scroll: false });
  };

  changeScrollStatusToShort = () => {
    this.setState({ scroll: true });
  };

  render() {
    return (
      <Router>
        <div className={this.state.scroll ? styles.appBasic : styles.appBasic2}>
          <NavBar
            scrollChangeLong={this.changeScrollStatusToLong}
            scrollChangeShort={this.changeScrollStatusToShort}
          />
          <br></br>
          <Route exact path="/" component={() => <JobSearchContainer />} />
          <Route exact path="/post" component={() => <PostContainer />} />
          <Route exact path="/about" component={() => <AboutContainer />} />
          <Route exact path="/admin" component={() => <AdminPage />} />
        </div>
      </Router>
    );
  }
}
