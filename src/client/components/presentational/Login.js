import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-text">
        <h5 className="right-text-header">
          <span className="right-text-header-underline">TRACK</span>
        </h5>
        <h3>Rome wasn't built in a day</h3>
      </div>
      <div className="login-button-container">
        <button className="login-button">Login</button>
        <button className="login-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
