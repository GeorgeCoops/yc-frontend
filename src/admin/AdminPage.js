import React, { Component } from "react";

import AdminScroller from "./AdminScroller";

import styles from "../css/AdminScroller.module.css";

export default class AdminPage extends Component {
  state = {
    jobs: [],
  };

  clickedPost = (post) => {
    const postCopy = { ...post };
    postCopy.accepted = !postCopy.accepted;
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postCopy),
    }).then(this.getAllPosts);
  };

  filterAcceptedPosts = () => {
    return this.state.jobs.filter((job) => job.accepted);
  };

  filterUnAcceptedPosts = () => {
    return this.state.jobs.filter((job) => !job.accepted);
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
      <div className={styles.border}>
        <AdminScroller
          jobs={this.filterAcceptedPosts()}
          clickedPost={this.clickedPost}
          layout={"JobContainerL"}
        />
        <AdminScroller
          jobs={this.filterUnAcceptedPosts()}
          clickedPost={this.clickedPost}
          layout={"JobContainerR"}
        />
      </div>
    );
  }
}
