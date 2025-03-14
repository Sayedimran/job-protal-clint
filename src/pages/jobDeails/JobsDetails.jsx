import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobsDetails = () => {
  const { _id , title, company , deadline } = useLoaderData();

  return (
    <div>
      <h2>Job Details for {title}</h2>
          <p>Apply for: {company}</p>
      <p>deadline: {deadline}</p>
      <Link to={`/JobApply/${_id}`} >
        <button className="btn bg-pink-700">Apply Now!</button>
       </Link>
    </div>
  );
};

export default JobsDetails;
