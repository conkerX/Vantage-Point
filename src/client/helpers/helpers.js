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
  } else if (questions[pointer][question].type === "health/fitness") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[2] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[2] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[2] += answer;
    }
  } else if (questions[pointer][question].type === "growth/learning") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[3] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[3] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[3] += answer;
    }
  } else if (questions[pointer][question].type === "career/business/work") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[4] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[4] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[4] += answer;
    }
  } else if (questions[pointer][question].type === "money/finance") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[5] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[5] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[5] += answer;
    }
  } else if (
    questions[pointer][question].type === "family/friends/social relationships"
  ) {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[6] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[6] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[6] += answer;
    }
  } else if (questions[pointer][question].type === "community") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[7] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[7] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[7] += answer;
    }
  } else if (questions[pointer][question].type === "fun") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[8] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[8] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[8] += answer;
    }
  } else if (questions[pointer][question].type === "spirituality") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[9] += answer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[9] += answer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[9] += answer;
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
  } else if (questions[pointer][question].type === "health/fitness") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[2] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[2] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[2] -= previousAnswer;
    }
  } else if (questions[pointer][question].type === "growth/learning") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[3] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[3] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[3] -= previousAnswer;
    }
  } else if (questions[pointer][question].type === "career/business/work") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[4] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[4] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[4] -= previousAnswer;
    }
  } else if (questions[pointer][question].type === "money/finance") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[5] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[5] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[5] -= previousAnswer;
    }
  } else if (
    questions[pointer][question].type === "family/friends/social relationships"
  ) {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[6] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[6] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[6] -= previousAnswer;
    }
  } else if (questions[pointer][question].type === "community") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[7] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[7] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[7] -= previousAnswer;
    }
  } else if (questions[pointer][question].type === "fun") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[8] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[8] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[8] -= previousAnswer;
    }
  } else if (questions[pointer][question].type === "spirituality") {
    if (questions[pointer][question].subtype === "whereIThoughtIWasGoingToBe") {
      data.datasets[0].data[9] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIAm") {
      data.datasets[1].data[9] -= previousAnswer;
    } else if (questions[pointer][question].subtype === "whereIThinkIAmGoing") {
      data.datasets[2].data[9] -= previousAnswer;
    }
  }

  console.log("adjusted answer by ", previousAnswer);
};
