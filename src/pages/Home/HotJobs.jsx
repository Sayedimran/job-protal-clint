import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="p-2">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
