import React, { Component } from "react";

import styles from "../css/JobContainer.module.css";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

import JobPost from "../Components/JobPost";

export default class JobScroll extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button
              className={styles.filterButton}
              content="+ filters"
              primary
              onClick={this.handleOpen}
            ></Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="small"
        >
          {" "}
          <Header icon="browser" content="Filters" />
          <Modal.Content>
            <Button.Group>
              <Button onClick={this.props.onFilterChange} name="Permanent">
                Permanent
              </Button>
              <Button.Or />
              <Button onClick={this.props.onFilterChange} name="Freelance">
                Freelance
              </Button>
              <Button.Or />
              <Button onClick={this.props.onFilterChange} name="All">
                Both
              </Button>
            </Button.Group>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Back
            </Button>
          </Modal.Actions>
        </Modal>

        <div className={styles.display}>
          <p className={styles.currentlyShowing}>currently showing:</p>
          <p className={styles.jobType}>
            {this.props.filterValue.toUpperCase()} JOBS
          </p>
        </div>
        <div className={styles.JobContainerBorder}>
          <div className={styles.JobContainer}>
            {this.props.jobs.map((job) => (
              <JobPost
                job={job}
                key={job.id}
                clickedPost={this.props.clickedPost}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
