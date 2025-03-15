import React from "react";
import useAuth from "../../hooks/useAuth";

const AdJob = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());

    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: " job Added ",
            icon: "success",
            draggable: true,
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div className="mx-auto p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Apply for the Job
      </h2>
      <form onSubmit={handleAddJob} className="space-y-4">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            name="jobTitle"
            type="text"
            placeholder="Enter Job Title"
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            name="hr_email"
            type="email"
            defaultValue={user?.email}
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Company logo  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company logo </span>
          </label>
          <input
            name="logo"
            type="text"
            placeholder="Company Logo URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job location</span>
          </label>
          <input
            name="jobLocation"
            type="text"
            placeholder="Enter Job Location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            name="jobField"
            className="select select-neutral w-full"
            required
          >
            <option disabled>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
            <option>IT & Software</option>
            <option>Customer Support</option>
          </select>
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            name="jobType"
            className="select select-neutral w-full"
            required
          >
            <option disabled>Pick a Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Salary Range */}
        <label className="form-control">
          <span className="label-text">Salary Range</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <input
              name="salaryMin"
              type="number"
              className="input w-full"
              placeholder="Min"
              required
            />
          </div>
          <div>
            <input
              name="salaryMax"
              type="number"
              className="input w-full"
              placeholder="Max"
              required
            />
          </div>
          <div>
            <select name="currency" className="select select-neutral w-full">
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            name="requirements"
            className="textarea textarea-bordered w-full"
            placeholder="Enter job requirements"
            required
          ></textarea>
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            name="jobDescription"
            className="textarea textarea-bordered w-full"
            placeholder="Enter job description"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdJob;
