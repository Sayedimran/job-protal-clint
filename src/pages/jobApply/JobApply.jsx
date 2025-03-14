import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();

  const { user } = useAuth();
  console.log(id, user);

  const navigate = useNavigate()

  const submitJobApply = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const github = form.github.value;
    const linkedIn = form.linkedIn.value;
    const resume = form.resume.value;

    console.log(name, email, github, linkedIn, resume);
    const jobApplication = {
      jo_id: id,
      applicant_email: user.email,
      github,
      linkedIn,
      resume,
    };

    // posting data to server
    

    fetch("http://localhost:5000/job_application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // window:Try me!
        if (data.insertedId) {
           Swal.fire({
             title: "Drag me!",
             icon: "success",
             draggable: true,
           });
          navigate('/myApplication');
         }
      });
  };
  return (
    <div className=" mx-auto p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Apply for the Job
      </h2>
      <form onSubmit={submitJobApply} className="space-y-4">
        {/* Full Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* GitHub URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub Profile</span>
          </label>
          <input
            name="github"
            type="url"
            placeholder="https://github.com/yourprofile"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* LinkedIn URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn Profile</span>
          </label>
          <input
            name="linkedIn"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Portfolio or Resume URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Portfolio / Resume URL</span>
          </label>
          <input
            name="resume"
            type="url"
            placeholder="https://yourportfolio.com"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button className="btn btn-primary w-full">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
