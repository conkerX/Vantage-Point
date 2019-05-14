import React from "react";
import profileBrandon from "../../../../assets/profile_brandon.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-tiles">
        <img className="about-photo" src={profileBrandon} />
        <div className="about-photo-description">
          <p>Building cool shit for cool people.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
