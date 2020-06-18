import React, { Component } from "react";

import JobScroll from "../Components/JobScroll";
import ShownJob from "../Components/ShownJob";

import styles from "../css/JobContainer.module.css";
import { Radio } from "semantic-ui-react";

export default class JobSearchContainer extends Component {
  state = {
    shownPost: { company: "" },
    jobs: [],
    images: [],
    filterValue: "All",
  };

  clickedPost = (post) => {
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

  filterFilteredPosts = () => {
    if (this.state.filterValue !== "All") {
      return this.filterAcceptedPosts().filter(
        (job) => job.length === this.state.filterValue
      );
    }
    return this.filterAcceptedPosts().sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  onFilterChange = (e) => {
    this.setState({ filterValue: e.target.name });
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((jobs) =>
        this.setState({
          jobs: jobs,
          shownPost: jobs.sort((a, b) => (a.id > b.id ? 1 : -1))[0],
        })
      );
    // .then((jobs) => console.log(jobs));

    fetch("http://localhost:3000/post_images")
      .then((resp) => resp.json())
      .then((images) => this.setState({ images: images }));
  };

  handleChange = (e) => {};

  render() {
    return (
      <div className={styles.spreader}>
        <JobScroll
          clickedPost={this.clickedPost}
          jobs={this.filterFilteredPosts()}
          onFilterChange={this.onFilterChange}
          filterValue={this.state.filterValue}
        />
        <ShownJob
          job={this.state.shownPost}
          images={this.imageFilter()}
          color={this.props.color}
        />
        <Radio
          toggle
          checked={this.props.color}
          onClick={this.props.toggleColor}
          readOnly={false}
          className={styles.toggle}
        />
      </div>
    );
  }
}
