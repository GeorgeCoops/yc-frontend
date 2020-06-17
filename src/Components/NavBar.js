import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Link to={"/"}>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dh20yq9bc/image/upload/v1592322349/logothick_wnzit0.png"
          alt=""
        />
      </Link>
      <Link className={styles.linkStyle} to={"/about"}>
        about
      </Link>
      <Link className={styles.linkStyle} to={"/post"}>
        post
      </Link>
      <Link className={styles.linkStyle} to={"/"}>
        jobs
      </Link>
    </div>
  );
}
