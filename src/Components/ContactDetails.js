import React, { Component } from "react";

import styles from "../css/ContactDetails.module.css";
import { Icon } from "semantic-ui-react";

export default class ContactDetails extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.text}>2020 YC - FLATIRON - GC</div>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/george-cooper-web-design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="facebook" size="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/george-cooper-web-design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" size="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/george-cooper-web-design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="google" size="large" />
          </a>
        </div>
      </div>
    );
  }
}
