import React, { Component } from "react";

import styles from "../css/AdminScroller.module.css";

import AdminJobPost from "./AdminJobPost";

export default class AdminScroller extends Component {
  render() {
    return (
      <div className={styles[this.props.layout]}>
        {this.props.jobs.map((job) => (
          <AdminJobPost
            job={job}
            key={job.id}
            clickedPost={this.props.clickedPost}
          />
        ))}
      </div>
    );
  }
}
