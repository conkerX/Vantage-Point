import React from "react";

const Questions = ({
  pointer,
  questions,
  scaleMouseEnter,
  scaleMouseLeave,
  handleScaleClick,
  nextQuestion,
  backQuestion
}) => {
  console.log("pointer -->", pointer);
  console.log("questions -->", questions);

  return (
    <div className="questions-container">
      <div className="questions-header-container">
        <h3 className="questions-header">
          <span className="questions-header-underline">Questions Page</span>
        </h3>
      </div>
      <div className="questions-question-container">
        <div>{questions[pointer].question}</div>

        <div>
          <h3>Where I am</h3>
          <div className="scale-container">
            {questions[pointer].whereIAm.scale.map(num => (
              <div
                onMouseEnter={scaleMouseEnter}
                onMouseLeave={scaleMouseLeave}
                onClick={handleScaleClick}
                data-answer="whereIAm"
                className="scale"
                key={num}
              >
                {num}
              </div>
            ))}
          </div>

          <h3>Where I think I am going</h3>
          <div className="scale-container">
            {questions[pointer].whereIThinkIAmGoing.scale.map(num => (
              <div
                onMouseEnter={scaleMouseEnter}
                onMouseLeave={scaleMouseLeave}
                onClick={handleScaleClick}
                data-answer="whereIThinkIAmGoing"
                className="scale"
                key={num}
              >
                {num}
              </div>
            ))}
          </div>

          <h3>Where I thought I was going to be</h3>
          <div className="scale-container">
            {questions[pointer].whereIThoughtIWasGoingToBe.scale.map(num => (
              <div
                onMouseEnter={scaleMouseEnter}
                onMouseLeave={scaleMouseLeave}
                onClick={handleScaleClick}
                data-answer="whereIThoughtIWasGoingToBe"
                className="scale"
                key={num}
              >
                {num}
              </div>
            ))}
          </div>

          <h3>Where I am heading</h3>
          <div className="scale-container">
            {questions[pointer].whereIAmHeading.scale.map(num => (
              <div
                onMouseEnter={scaleMouseEnter}
                onMouseLeave={scaleMouseLeave}
                onClick={handleScaleClick}
                data-answer="whereIAmHeading"
                className="scale"
                key={num}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div>
          {pointer !== 0 ? <button onClick={backQuestion}>Back</button> : null}
          {pointer === questions.length - 1 ? (
            <button>Finish</button>
          ) : (
            <button onClick={nextQuestion}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
