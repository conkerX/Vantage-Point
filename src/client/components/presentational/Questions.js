import React from "react";

const Questions = ({ pointer, questions, nextQuestion, backQuestion }) => {
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

        <div>Where I am</div>

        <div>Where I think I am going</div>

        <div>Where I thought I was going to be</div>

        <div>Where I am heading</div>

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
