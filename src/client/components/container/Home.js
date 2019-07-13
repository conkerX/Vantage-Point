import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Start from "../presentational/Start";
import Mission from "../presentational/Mission";
import Header from "../presentational/Header";
import Login from "../presentational/Login";
import Planner from "../presentational/Planner";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.props.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll);
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-logo-container">VANTAGE POINT</div>
        <Mission />
        <div className="home-start-container">
          <div className="home-launch-container">
            <p className="home-launch-text">Get your vantage point today!</p>
            <Link to="/questions">
              <button className="start-button">Start</button>
            </Link>
          </div>
        </div>
        <div className="home-disclaimer-container">
          <strong>Not Medical, Mental Health, or Religious Advice.</strong> The
          information provided in or through our Website, Programs, Products and
          Services is not intended to be a substitute for professional medical
          advice, diagnosis or treatment that can be provided by your own
          Medical Provider (including doctor/physician, nurse, physician’s
          assistant, or any other health professional), Mental Health Provider
          (including psychiatrist, psychologist, therapist, counsellor, or
          social worker), or member of the clergy. Therefore, do not disregard
          or delay seeking professional medical, mental health or religious
          advice because of information you have read on this website or
          received from us. Do not stop taking any medications without speaking
          to your own Medical Provider or Mental Health Provider. If you have or
          suspect that you have a medical or mental health problem, contact your
          own Medical Provider or Mental Health Provider promptly.
        </div>
      </div>
    );
  }
}

export default Home;

// <div className="column-container">
// <div> Logo </div>
// <div className="left-side-container">
//   <Mission />
// </div>
// <div className="right-side-container">
//   <div className="grid-container">
//     <Login />
//     <Planner />
//     <Login />
//     <Login />
//   </div>
// </div>
// <div> Disclaimer </div>
// </div>
