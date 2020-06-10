import React, { Component } from "react";
import { Button, Checkbox, Form, Input, Radio } from "semantic-ui-react";

export default class AdminLogIn extends Component {
  render() {
    return (
      <form class="ui form">
        <div class="field">
          <label>First Name</label>
          <input placeholder="First Name" />
        </div>
        <div class="field">
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </div>
        <button type="submit" class="ui button">
          Submit
        </button>
      </form>
    );
  }
}
