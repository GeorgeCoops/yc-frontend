import React from "react";

export default function AdminJobPost(props) {
  const job = props.job;
  return (
    <div onClick={() => props.clickedPost(job)}>
      <h2>{job.position}</h2>
      <h3>{job.company.toUpperCase()}</h3>
      <p>
        {job.location} - {job.length}{" "}
      </p>
    </div>
  );
}
