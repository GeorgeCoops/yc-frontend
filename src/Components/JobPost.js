import React from "react";

import styles from "../css/JobContainer.module.css";

export default function JobPost(props) {
  const job = props.job;

  return (
    <div className={styles.jobPost} onClick={() => props.clickedPost(job)}>
      <hr className={styles.lineBreak}></hr>
      <h2 className={styles.postPosition}>{job.position.toLowerCase()}</h2>
      <h4 className={styles.postCompany}>{job.company.toUpperCase()}</h4>
      <p className={styles.postDetails}>
        {job.location} - {job.length}{" "}
      </p>
    </div>
  );
}
