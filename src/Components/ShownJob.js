import React from "react";

import styles from "../css/ShownJob.module.css";

export default function ShownJob(props) {
  const job = props.job;
  const images = props.images;

  return (
    <div className={styles.spreeder}>
      <div className={styles.ShownJob}>
        <h2>{job.position}</h2>
        <h3>{job.company}</h3>
        <h3>{job.location}</h3>
        <h4>{job.length}</h4>
        <p>{job.description}</p>
        {images.map((image) => (
          <img alt="" key={image.id} src={image.url} />
        ))}
      </div>
    </div>
  );
}
