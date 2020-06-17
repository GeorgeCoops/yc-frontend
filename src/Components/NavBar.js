import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <Link to={"/"}>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dh20yq9bc/image/upload/v1592322349/logothick_wnzit0.png"
          alt=""
          onClick={props.scrollChangeShort}
        />
      </Link>
      <Link
        className={styles.linkStyle}
        to={"/about"}
        onClick={props.scrollChangeLong}
      >
        about
      </Link>
      <Link
        className={styles.linkStyle}
        to={"/post"}
        onClick={props.scrollChangeShort}
      >
        post
      </Link>
      <Link
        className={styles.linkStyle}
        to={"/"}
        onClick={props.scrollChangeShort}
      >
        jobs
      </Link>
    </div>
  );
}
