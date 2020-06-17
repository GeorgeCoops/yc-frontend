import React from "react";
import { Button } from "semantic-ui-react";

import styles from "../css/JobContainer.module.css";

export default function AdminJobPost(props) {
  const job = props.job;
  return (
    <div className={styles.jobPost}>
      <hr className={styles.lineBreak2}></hr>
      <div>
        <h2 className={styles.postPosition}>{job.position.toLowerCase()}</h2>
        <h4 className={styles.postCompany}>{job.company.toUpperCase()}</h4>
        <p className={styles.postDetails}>
          {job.location} - {job.length}{" "}
        </p>
      </div>
      <Button
        onClick={() => props.clickedPost(job)}
        content={!job.accepted ? "add" : "remove"}
        primary
      />
      <Button
        onClick={() => props.deletePost(job)}
        content="delete"
        secondary
      />
    </div>
  );
}
