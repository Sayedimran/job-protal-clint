import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
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
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 ">
      <div className="card-body">
        <div className="flex gap-2 ">
          <div>
            <img className="size-12" src={company_logo} alt="" />
          </div>
          <div>
            <h2 className="card-title text-xl font-semibold">{company}</h2>
            <p className="flex items-center gap-1 text-gray-600">
              <IoLocationOutline /> {location}
            </p>
          </div>
        </div>
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        <p className="badge badge-outline badge-primary">{jobType}</p>
        <p className="badge badge-outline badge-secondary">{category}</p>

        <div className="mt-2">
          <p className="text-gray-700">
            💰 Salary: {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency.toUpperCase()}
          </p>
          <p className="text-gray-500">📅 Deadline: {applicationDeadline}</p>
        </div>

        <div className="card-actions justify-start mt-3">
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-fuchsia-600 btn-sm">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
