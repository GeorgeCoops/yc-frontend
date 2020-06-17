import React from "react";

import { Icon } from "semantic-ui-react";
import styles from "../css/ShownJob.module.css";
import { CloudinaryContext, Image } from "cloudinary-react";

export default function ShownJob(props) {
  const job = props.job;
  const singleImages = props.images;
  const company = props.job.company;
  const reducedName = company.replace(/-|\s/g, "").toUpperCase();

  return (
    <CloudinaryContext cloudName="dh20yq9bc">
      <div className={styles.spreeder}>
        <a href={job.jobLink} target="_blank" rel="noopener noreferrer">
          <h2 className={styles.apply}>APPLY</h2>
        </a>
        <h1 className={styles.header}>{reducedName.repeat(4)}</h1>
        <h1 className={styles.header2}>{reducedName.repeat(4)}</h1>
        <Image
          className={styles.image}
          key={singleImages[0] ? singleImages[0].url : ""}
          publicId={singleImages[0] ? singleImages[0].url : ""}
          fetch-format="auto"
          quality="auto"
          src={singleImages[0] ? singleImages[0].url : ""}
        />
        <div className={styles.ShownJob}>
          <div className={styles.shownText}>
            <h2 className={styles.position}>{job.position}</h2>
            <hr className={styles.line} />
            <h3 className={styles.company}>
              {job.company} - {job.location} - {job.length}
            </h3>
            <p className={styles.description}>{job.description}</p>
            <div className={styles.icons}>
              <a href={job.facebook} target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size="large" />
              </a>
              <a href={job.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size="large" />
              </a>
              <a href={job.facebook} target="_blank" rel="noopener noreferrer">
                <Icon name="google" size="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </CloudinaryContext>
  );
}
