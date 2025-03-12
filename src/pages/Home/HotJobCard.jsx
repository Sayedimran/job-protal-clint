import React from "react";

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
  } = job;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 p-5">
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">
          {company} • {location}
        </p>
        <p className="badge badge-outline badge-primary">{jobType}</p>
        <p className="badge badge-outline badge-secondary">{category}</p>

        <div className="mt-2">
          <p className="text-gray-700">
            💰 Salary: {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency.toUpperCase()}
          </p>
          <p className="text-gray-500">📅 Deadline: {applicationDeadline}</p>
        </div>

        <div className="card-actions justify-end mt-3">
          <button className="btn btn-primary btn-sm">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
