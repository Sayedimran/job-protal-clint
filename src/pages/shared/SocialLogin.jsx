import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn text-center">
        GOogle
      </button>
    </div>
  );
};

export default SocialLogin;
