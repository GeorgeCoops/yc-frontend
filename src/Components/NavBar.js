import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>Y</div>
      <Link className={styles.linkStyle} to={"/about"}>
        about
      </Link>
      <Link className={styles.linkStyle} to={"/post"}>
        post
      </Link>
      {/* <Link className={styles.linkStyle} to={"/creatives"}>
        creatives
      </Link> */}
      <Link className={styles.linkStyle} to={"/"}>
        jobs
      </Link>
    </div>
  );
}
