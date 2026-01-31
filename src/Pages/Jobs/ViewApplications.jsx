import React from "react";
import { useLoaderData, useParams } from "react-router";
// who is apply and how much apply for a job
const ViewApplications = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  console.log(id);
  console.log(jobs);

  return (
    <div>
      view{jobs.length} <h2>{id}</h2>
    </div>
  );
};

export default ViewApplications;
