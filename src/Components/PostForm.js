import React from "react";
import {
  Message,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
} from "semantic-ui-react";

import styles from "../css/PostForm.module.css";

export default class PostForm extends React.Component {
  state = {
    company: "",
    position: "",
    location: "",
    length: "",
    jobLink: "",
    instagram: "",
    facebook: "",
    description: "",
    imageFiles: [],
    success: false,
  };

  changeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changeStateWithButton = (e, { length }) => this.setState({ length });

  handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      company: this.state.company,
      position: this.state.position,
      location: this.state.location,
      jobLink: this.state.jobLink,
      length: this.state.length,
      instagram: this.state.instagram,
      facebook: this.state.facebook,
      description: this.state.description,
    };

    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then(() => {
      this.setState({
        company: "",
        position: "",
        location: "",
        jobLink: "",
        length: "",
        instagram: "",
        facebook: "",
        description: "",
        success: true,
      });
    });
  };

  render() {
    return (
      <div className={styles.formWrapper}>
        <Form
          success={this.state.success ? "success" : ""}
          onSubmit={this.handleSubmit}
          size="small"
          className={styles.form}
        >
          <Form.Field
            onChange={this.changeState}
            id="form-input-control-last-name"
            control={Input}
            label="Job Title"
            placeholder="Job Title"
            name="position"
            value={this.state.position}
          />
          <Form.Group widths="equal">
            <Form.Field
              onChange={this.changeState}
              name="company"
              id="form-input-control-first-name"
              control={Input}
              label="Company Name"
              placeholder="Company Name"
              value={this.state.company}
            />
            <Form.Field
              onChange={this.changeState}
              name="location"
              id="form-input-control-first-name"
              control={Input}
              label="Location"
              placeholder="Location"
              value={this.state.location}
            />
          </Form.Group>
          <Form.Field>
            <label>Application Link/Email</label>
            <input
              placeholder="Application Link/Email"
              name="jobLink"
              onChange={this.changeState}
              value={this.state.jobLink}
            />
          </Form.Field>
          <Form.Field>
            <label>Instagram Link</label>
            <input
              placeholder="Instagram Link"
              name="instagram"
              onChange={this.changeState}
              value={this.state.instagram}
            />
          </Form.Field>
          <Form.Field>
            <label>Facebook Link</label>
            <input
              placeholder="Facebook Link"
              name="facebook"
              onChange={this.changeState}
              value={this.state.facebook}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                label="Freelance"
                name="radioGroup"
                length="Freelance"
                checked={this.state.length === "Freelance"}
                onChange={this.changeStateWithButton}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Permanant"
                name="radioGroup"
                length="Permanent"
                checked={this.state.length === "Permanent"}
                onChange={this.changeStateWithButton}
              />
            </Form.Field>

            <Form.Field
              className={styles.imageUpload}
              label="Image Upload"
              control="button"
            >
              <input
                type="file"
                name="imageFiles"
                onChange={this.changeState}
                multiple
                value={this.state.imageFiles}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field
            onChange={this.changeState}
            name="description"
            label="Job Description"
            control="textarea"
            rows="3"
            value={this.state.description}
          />
          <Form.Field name="">
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>

          <Message
            success
            header="Form Completed"
            content="This will be approved by an admin and added to the site wihthin 3-5 days"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
