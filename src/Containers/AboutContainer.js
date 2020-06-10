import React from "react";

import styles from "../css/About.module.css";

export default function AboutContainer() {
  return (
    <div>
      <h1 className={styles.basic}>
        jobs and content for skilled creative young people.
      </h1>
      <p className={styles.basic}>
        young people’s valuable skillsets are underused. here only junior level
        jobs are displayer. freelance jobs are paid by job, not by hour. apply
        directly to the business, no sign up required.
      </p>
    </div>
  );
}
