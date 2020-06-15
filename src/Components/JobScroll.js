import React from "react";

import styles from "../css/JobContainer.module.css";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import JobPost from "../Components/JobPost";

export default function JobScroll(props) {
  return (
    <div>
      <Modal
        trigger={
          <Button
            className={styles.filterButton}
            content="+ filters"
            primary
          ></Button>
        }
      >
        {" "}
        <Modal.Header>Select filters</Modal.Header>
        <Modal.Content image>
          <Button.Group>
            <Button>One</Button>
            <Button.Or />
            <Button>Two</Button>
            <Button.Or />
            <Button>Three</Button>
          </Button.Group>
          <Button.Group>
            <Button>One</Button>
            <Button.Or />
            <Button>Two</Button>
            <Button.Or />
            <Button>Three</Button>
          </Button.Group>
        </Modal.Content>
      </Modal>

      <div className={styles.display}>
        <p className={styles.currentlyShowing}>currently showing:</p>
        <p className={styles.jobType}>PERMANENT JOBS</p>
      </div>
      <div className={styles.JobContainerBorder}>
        <div className={styles.JobContainer}>
          {props.jobs.map((job) => (
            <JobPost job={job} key={job.id} clickedPost={props.clickedPost} />
          ))}
        </div>
      </div>
    </div>
  );
}
