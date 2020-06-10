import React, { Component } from "react";

import JobScroll from "../Components/JobScroll";
import ShownJob from "../Components/ShownJob";

import styles from "../css/JobContainer.module.css";

export default class JobSearchContainer extends Component {
  state = {
    shownPost: {},
    jobs: [],
    images: [],
  };

  clickedPost = (post) => {
    console.log(post);
    this.setState({ shownPost: post });
  };

  imageFilter = () => {
    return this.state.images.filter(
      (image) => image.post_id === this.state.shownPost.id
    );
  };

  filterAcceptedPosts = () => {
    return this.state.jobs.filter((job) => job.accepted);
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((jobs) => this.setState({ jobs: jobs, shownPost: jobs[0] }));

    fetch("http://localhost:3000/post_images")
      .then((resp) => resp.json())
      .then((images) => this.setState({ images: images }));
  };

  render() {
    return (
      <div className={styles.spreader}>
        <JobScroll
          clickedPost={this.clickedPost}
          jobs={this.filterAcceptedPosts()}
        />
        <ShownJob job={this.state.shownPost} images={this.imageFilter()} />
      </div>
    );
  }
}
