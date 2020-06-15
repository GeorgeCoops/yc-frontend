import React, { Component } from "react";

import AdminLogIn from "./AdminLogIn";
import AdminScroller from "./AdminScroller";

import styles from "../css/AdminScroller.module.css";

export default class AdminPage extends Component {
  state = {
    jobs: [],
    accepted: false,
    username: "",
    password: "",
  };

  clickedPost = (post) => {
    // debugger;
    const postCopy = { ...post };
    postCopy.accepted = !postCopy.accepted;
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorisation: localStorage.getItem("token"),
      },
      body: JSON.stringify(postCopy),
    }).then(this.getAllPosts);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/admin_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((r) => r.json())
      .then((adminInfo) => {
        if (adminInfo.error) {
          this.setState({
            username: "error",
            password: "",
          });
        } else {
          localStorage.setItem("token", adminInfo.token);
          this.setState({
            username: "",
            password: "",
            accepted: true,
          });
        }
      });
  };

  filterAcceptedPosts = () => {
    return this.state.jobs.filter((job) => job.accepted);
  };

  filterUnAcceptedPosts = () => {
    return this.state.jobs.filter((job) => !job.accepted);
  };

  deletePost = (post) => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorisation: localStorage.getItem("token"),
      },
    }).then(this.getAllPosts);
  };

  getAllPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((jobs) => this.setState({ jobs: jobs }));
  };

  componentDidMount = () => {
    this.getAllPosts();
  };

  render() {
    return (
      <div>
        {this.state.accepted ? (
          <div className={styles.border}>
            <AdminScroller
              jobs={this.filterAcceptedPosts()}
              clickedPost={this.clickedPost}
              deletePost={this.deletePost}
              layout={"JobContainerL"}
            />
            <AdminScroller
              jobs={this.filterUnAcceptedPosts()}
              clickedPost={this.clickedPost}
              layout={"JobContainerR"}
              deletePost={this.deletePost}
            />
          </div>
        ) : (
          <AdminLogIn
            usernameInput={this.state.username}
            passwordInput={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}
