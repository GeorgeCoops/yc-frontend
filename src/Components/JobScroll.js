import React from "react";

import styles from "../css/JobContainer.module.css";

import JobPost from "../Components/JobPost";

export default function JobScroll(props) {
  return (
    <div className={styles.JobContainer}>
      {props.jobs.map((job) => (
        <JobPost job={job} key={job.id} clickedPost={props.clickedPost} />
      ))}
    </div>
  );
}
