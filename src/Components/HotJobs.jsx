import React from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobs }) => {
  // console.log(jobs);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center pt-6 pb-2  ">
        Hot <span className="text-secondary"> Jobs</span> Today
      </h1>
      <div className="md:border border-purple-900 max-w-2xs mx-auto mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
