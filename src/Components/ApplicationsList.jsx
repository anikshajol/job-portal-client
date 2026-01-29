import React, { use } from "react";
import ApplicationsTable from "./ApplicationsTable";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const myApplications = use(myApplicationsPromise);
  console.log(myApplications);

  return (
    <div>
      list of applications {myApplications.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {myApplications.map((application, index) => (
              <ApplicationsTable
                key={application._id}
                index={index}
                application={application}
              ></ApplicationsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
