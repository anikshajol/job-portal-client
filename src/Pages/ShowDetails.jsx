import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router";
import { useLoaderData } from "react-router";

const ShowDetails = () => {
  const job = useLoaderData();
  //   console.log(job);

  return (
    <div className="card bg-base-100 w-4/5 mx-auto mt-10 shadow-sm">
      <figure className="flex items-center justify-start px-6 pt-6">
        <img src={job?.company_logo} alt="Shoes" />
        <h2 className="text-xl font-bold text-red-800">{job?.company}</h2>
      </figure>
      <div className="card-body pt-0 ">
        <h2 className="card-title">{job?.title}</h2>
        <p className="text-lg">{job?.description}</p>
        <div className="flex justify-around  mt-4">
          <ul>
            <h3 className="text-xl pb-2 font-semibold text-primary">
              Job requirements
            </h3>
            {job?.requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-center gap-2 font-medium text-shadow-emerald-800"
              >
                <FaArrowAltCircleRight />
                {req}
              </li>
            ))}
          </ul>

          <ul>
            <h3 className="text-xl pb-2 font-semibold text-primary">
              Job responsibilities
            </h3>
            {job?.responsibilities.map((res, index) => (
              <li
                key={index}
                className="flex items-center gap-2 font-medium text-shadow-emerald-800"
              >
                <FaArrowAltCircleRight /> {res}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/job-apply/${job?._id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
