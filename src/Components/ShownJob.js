import React from "react";

import { Icon } from "semantic-ui-react";
import styles from "../css/ShownJob.module.css";

export default function ShownJob(props) {
  const job = props.job;
  const images = props.images;
  const company = props.job.company;
  const reducedName = company.replace(/-|\s/g, "").toUpperCase();

  return (
    <div className={styles.spreeder}>
      <h2 className={styles.apply}>APPLY</h2>
      <h1 className={styles.header}>{reducedName + reducedName}</h1>
      <h1 className={styles.header2}>{reducedName + reducedName}</h1>
      <img
        className={styles.image}
        alt=""
        src={
          "https://images.squarespace-cdn.com/content/v1/5ac2674075f9ee1ecc5c06b7/1586851969347-HBN0U6XZRU1HZT1HIIZ5/ke17ZwdGBToddI8pDm48kOnFd6yS9AGNiVEN6Nsa8DB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmqrF7gMiNig3LJ_XdSD94kFx7FLI5gp9qNbBrrulp--Q7z82Hl8QDS6sEGmQjILfU/Back+full.png?format=500w"
        }
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
            <Icon name="facebook" size="large" />
            <Icon name="instagram" size="large" />
            <Icon name="google" size="large" />
          </div>
        </div>
        {/* {images.map((image) => (
          <img alt="" key={image.id} src={image.url} />
        ))} */}
      </div>
    </div>
  );
}
