import React, { Component } from "react";
// import { Button, Checkbox, Form, Input, Radio } from "semantic-ui-react";

import styles from "../css/AdminScroller.module.css";

export default class AdminLogIn extends Component {
  render() {
    return (
      <div className={styles.AdminLogInWrapper}>
        <div className={styles.AdminLogIn}>
          <form className="ui form" onSubmit={this.props.handleSubmit}>
            <div className="field">
              <label>Username</label>
              <input
                name="username"
                placeholder="Username"
                value={this.props.usernameInput}
                onChange={(e) => this.props.handleChange(e)}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={this.props.passwordInput}
                placeholder="Password"
                onChange={(e) => this.props.handleChange(e)}
              />
            </div>
            <button type="submit" className="ui button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
