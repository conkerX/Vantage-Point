import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const Questions = ({
  pointer,
  questions,
  scaleMouseEnter,
  scaleMouseLeave,
  handleScaleClick,
  nextQuestion,
  backQuestion,
  calculateRadarChart
}) => {
  return (
    <div className="questions-container">
      <div className="questions-header-container">VANTAGE POINT</div>
      <div className="questions-question-container">
        <div className="questions-the-question-container">
          <p>
            <em>{questions[pointer].question}</em>
          </p>
        </div>

        <div className="questions-answers-container">
          <div className="questions-state-container">
            <p>Past prospective</p>
            <div className="scale-container">
              {questions[pointer].whereIThoughtIWasGoingToBe.scale.map(num => (
                <div
                  onMouseEnter={scaleMouseEnter}
                  onMouseLeave={scaleMouseLeave}
                  onClick={handleScaleClick}
                  data-answer="whereIThoughtIWasGoingToBe"
                  className={`scale ${num.isSelected ? "selected" : ""}`}
                  key={num.number}
                >
                  {num.number}
                </div>
              ))}
            </div>
          </div>

          <div className="questions-state-container">
            <p>Current prospective</p>
            <div className="scale-container">
              {questions[pointer].whereIAm.scale.map(num => (
                <div
                  onMouseEnter={scaleMouseEnter}
                  onMouseLeave={scaleMouseLeave}
                  onClick={handleScaleClick}
                  data-answer="whereIAm"
                  className={`scale ${num.isSelected ? "selected" : ""}`}
                  key={num.number}
                >
                  {num.number}
                </div>
              ))}
            </div>
          </div>

          <div className="questions-state-container">
            <p>Future prospective</p>
            <div className="scale-container">
              {questions[pointer].whereIThinkIAmGoing.scale.map(num => (
                <div
                  onMouseEnter={scaleMouseEnter}
                  onMouseLeave={scaleMouseLeave}
                  onClick={handleScaleClick}
                  data-answer="whereIThinkIAmGoing"
                  className={`scale ${num.isSelected ? "selected" : ""}`}
                  key={num.number}
                >
                  {num.number}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProgressBar percentage={pointer} />

        <div>
          {pointer !== 0 ? (
            <button className="questions-back-button" onClick={backQuestion}>
              Back
            </button>
          ) : null}
          {pointer === questions.length - 1 ? (
            <Link to="/radar-chart">
              <button
                className="questions-next-finish-button"
                onClick={calculateRadarChart}
              >
                Finish
              </button>
            </Link>
          ) : (
            <button
              className="questions-next-finish-button"
              onClick={nextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
