import React from "react";
import {
  Message,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
} from "semantic-ui-react";

import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "./CloudinaryService";

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
    success: false,
    formError: false,
    images: [],
  };

  changeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changeImageState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  beginUpload = (e) => {
    e.preventDefault();
    const uploadOptions = {
      cloudName: "dh20yq9bc",
      uploadPreset: "tvdohfed",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          this.setState({
            images: [...this.state.images, photos.info.public_id],
          });
        }
      } else {
        console.log(error);
      }
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
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((post) => {
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
          formError: false,
        });
        this.newImage(post);
      })
      .catch(() => {
        this.setState({ formError: true, success: false });
      });
  };

  newImage = (post) => {
    const newImageDetails = {
      url: this.state.images[0],
      post_id: post.id,
    };

    fetch("http://localhost:3000/post_images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newImageDetails),
    });
  };

  render() {
    return (
      <CloudinaryContext cloudName="dh20yq9bc">
        <img
          className={styles.largeLogo}
          src="https://res.cloudinary.com/dh20yq9bc/image/upload/v1592322345/YC_LOGO_d4c2ur.png"
          alt=""
        />
        <div className={styles.formWrapper}>
          <Form
            success={this.state.success}
            error={this.state.formError}
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
                <Form.Field control="button" onClick={this.beginUpload}>
                  upload
                </Form.Field>
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
            <Message
              error
              header="Error Submitting Form"
              content="Please make sure you have filled out all the sections of the form."
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </CloudinaryContext>
    );
  }
}
