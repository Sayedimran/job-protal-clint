import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerAnimationData from "../../assets/Animation - 1741626459398.json";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Fixed typo
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in sign page ", location);

  const from = location.state || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // Password Validation (6 chars, 1 uppercase, 1 number)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be 6 characters long, with at least 1 uppercase letter and 1 number."
      );
      return;
    }

    console.log("Registering user:", email, password);

    setErrorMessage(""); // Clear previous errors before calling Firebase
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        // Fixed error variable name
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerAnimationData} />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-7">
          <h1 className="text-5xl font-bold">Login now!</h1>
          {errorMessage && (
            <p className="text-red-500 font-medium">{errorMessage}</p>
          )}
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 ">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
