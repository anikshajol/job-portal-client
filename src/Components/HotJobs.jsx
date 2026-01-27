import React from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobs }) => {
  console.log(jobs);

  return (
    <div>
      {jobs.length}

      <div className="grid grid-cols-3 gap-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
