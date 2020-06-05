import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to={"/"}>jobs</Link>
      <br></br>
      <Link to={"/creatives"}>creatives</Link>
      <br></br>
      <Link to={"/about"}>about</Link>
      <br></br>
    </div>
  );
}
