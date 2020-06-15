import React from "react";
import { Button } from "semantic-ui-react";

export default function AdminJobPost(props) {
  const job = props.job;
  return (
    <div>
      <div>
        <h2>{job.position}</h2>
        <h3>{job.company.toUpperCase()}</h3>
        <p>
          {job.location} - {job.length}{" "}
        </p>
      </div>
      <Button
        onClick={() => props.clickedPost(job)}
        content={!job.accepted ? "add" : "remove"}
        primary
      />
      <Button
        onClick={() => props.deletePost(job)}
        content="delete"
        secondary
      />
    </div>
  );
}
