import React from "react";

const ApplicationsTable = ({ application, index }) => {
  // console.log(application);

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={application?.company_logo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{application?.company}</div>
              <div className="text-sm opacity-50">{application?.title}</div>
            </div>
          </div>
        </td>
        <td>{application?.title}</td>
        <td>{application.facebook}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default ApplicationsTable;
