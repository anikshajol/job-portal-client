import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ myJobsPromise }) => {
  const myJobs = use(myJobsPromise);
  console.log(myJobs);

  return (
    <div>
      {myJobs.length}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myJobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job?.category}</td>
                <td>
                  <Link to={`/applications/${job?._id}`}>
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
