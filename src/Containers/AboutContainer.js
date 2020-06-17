import React, { Component } from "react";

import styles from "../css/About.module.css";

export default class AboutContainer extends Component {
  // componentDidMount = () => {
  //   this.props.scroll();
  // };

  render() {
    return (
      <div>
        <h1 className={styles.topLine}>
          jobs and content for skilled creative young people.
        </h1>
        <p className={styles.secondLine}>
          young people’s valuable skillsets are underused. here only junior
          level jobs are displayer. freelance jobs are paid by job, not by hour.
          apply directly to the business, no sign up required.
        </p>
        <img
          className={styles.largeLogo}
          src="https://res.cloudinary.com/dh20yq9bc/image/upload/v1592322345/YC_LOGO_d4c2ur.png"
          alt=""
        />
        <p className={styles.scrollText}>
          YOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVESYOUNGCREATIVES
        </p>
      </div>
    );
  }
}
