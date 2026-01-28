import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  // console.log(Object.keys(job));

  // console.log(job);

  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        className="card bg-base-100 shadow-sm"
      >
        <figure className="flex h-28 max-h-1/2 justify-center items-center gap-3">
          <img src={company_logo} alt={company} />
          <div>
            <h2 className="text-2xl font-semibold">{company}</h2>
            <address>
              <small className="flex font-light text-gray-500 items-center">
                <CiLocationOn /> {location}
              </small>
            </address>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <section className="card-title font-light text-gray-500">
            <div className="flex items-center gap-1">
              <IoBagAdd />
              {jobType}
            </div>
            <div className="flex items-center gap-1 ml-2 ">
              <CiClock1 /> min ago
            </div>
          </section>
          <p>{description}</p>
          <p>
            <span className="font-semibold"> Salary:</span> {salaryRange.min}-
            {salaryRange.max}
            {salaryRange.currency}
          </p>

          <div className=" card-actions">
            {requirements.map((req, index) => (
              <div className="badge badge-outline" key={index}>
                {req}
              </div>
            ))}
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="card-actions justify-end"
          >
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default JobCard;
