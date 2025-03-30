import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div
      className="login-popup"
      onClick={() => setShowLogin(false)} // Close popup when clicking outside
    >
      <form
        className="login-popup-container"
        onClick={(e) => e.stopPropagation()} // Prevent click on form from closing popup
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)} // Close popup on clicking the cross icon
            src={assets.cross_icon}
            alt="Close"
            className="close-icon" // Optional: Add a class for styling
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        <p>
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Click here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
