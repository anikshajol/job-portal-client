import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

// who is apply and how much apply for a job
const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();
  // console.log(id);

  console.log(applications);

  const handleUpdateStatus = (e, job_id) => {
    console.log(e.target.value, job_id);

    axios
      .patch(`http://localhost:5000/applications/${job_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          toast.success("Data update successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      view{applications.length} <h2>{id}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application?.email}</td>
                <td>{application.jobId}</td>
                <td>
                  <select
                    onChange={(e) => handleUpdateStatus(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Interview</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
