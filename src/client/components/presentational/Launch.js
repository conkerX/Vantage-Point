import React from "react";
import { Link } from "react-router-dom";

const Launch = () => {
  return (
    <div className="home-start-container">
      <div className="home-launch-container">
        <p>
          Growth is an iterative process that requires fundamental needs,
          awareness, and will. This survey was created to help you identify
          areas of opportunity within your life. The survey should take 20
          minutes, and your responses are completely anonymous.
        </p>
        <p>We all have the power to take a step in the right direction.</p>
        <p>If you found this survey helpful, please share and help others!</p>
        <p>
          If you have any questions about the survey, please email:
          vantagepoint.creator@gmail.com
        </p>
        <div className="start-button-container">
          <Link style={{ width: "50%" }} to="/questions">
            <button className="start-button">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Launch;
