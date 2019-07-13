export const calculateAnswer = (answer, data, questions, pointer, question) => {
  // 100 scale multiply answer by 10
  answer *= 10;

  console.log("calculateAnswer answer-->", answer);

  if (questions[pointer][question].type === "home/self") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[0] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[0] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[0] += answer;
    }
  } else if (
    questions[pointer][question].type === "partner/love/relationships"
  ) {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[1] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[1] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[1] += answer;
    }
  }

  console.log("calculateAnswer data-->", data);
  return data;
};

export const adjustAnswer = (
  previousAnswer,
  data,
  questions,
  pointer,
  question
) => {
  // 100 scale multiply answer by 10
  previousAnswer *= 10;

  if (questions[pointer][question].type === "home/self") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[0] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[0] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[0] -= previousAnswer;
    }
  } else if (
    questions[pointer][question].type === "partner/love/relationships"
  ) {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[1] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[1] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[1] -= previousAnswer;
    }
  }

  console.log("adjusted answer by ", previousAnswer);
};
