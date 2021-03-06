import React, { Component } from "react";

import styles from "../css/About.module.css";
import ContactDetails from "../Components/ContactDetails";
import { Spring } from "react-spring/renderprops";

const YOUNG_CREATIVES = "YOUNGCREATIVES";

export default class AboutContainer extends Component {
  textBackground = () => {
    return <p className={styles.scrollText}>{YOUNG_CREATIVES.repeat(5)}</p>;
  };

  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0, marginLeft: -500 }}
          to={{ opacity: 1, marginLeft: 50 }}
        >
          {(props) => (
            <h1 className={styles.topLine} style={props}>
              jobs and content for skilled creative young people.
            </h1>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, marginLeft: 500 }}
          to={{ opacity: 1, marginLeft: 50 }}
        >
          {(props) => (
            <p className={styles.secondLine} style={props}>
              young people’s valuable skillsets are underused. here we find the
              best junior level jobs with low experience needs. freelance jobs
              are paid by job, not by hour. apply directly to the business, no
              sign up required.
            </p>
          )}
        </Spring>
        <img
          className={styles.largeLogo}
          src="https://res.cloudinary.com/dh20yq9bc/image/upload/v1592322345/YC_LOGO_d4c2ur.png"
          alt=""
        />
        <img
          className={styles.largeLogo2}
          src="https://res.cloudinary.com/dh20yq9bc/image/upload/v1592322345/YC_LOGO_d4c2ur.png"
          alt=""
        />
        <div className={styles.textWrapper}>
          <div className={styles.imageBackground}>
            <img
              onLoad={this.vibrantCheck}
              className={styles.displayImage}
              alt=""
              ref={this.imageRef}
              src={
                "https://res.cloudinary.com/dh20yq9bc/image/upload/v1592390995/d9373748-5d30-4583-9be0-8118cc6be1a4_zqvypr.jpg"
              }
            />
            <div className={styles.imageWord}>CREATE</div>
          </div>
          <div className={styles.writingYC}>
            {this.textBackground()}
            {this.textBackground()}
            {this.textBackground()}
            {this.textBackground()}
            {this.textBackground()}
            {this.textBackground()}
            {this.textBackground()}
            {this.textBackground()}
          </div>
        </div>
        <ContactDetails />
      </div>
    );
  }
}
