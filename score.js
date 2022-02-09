let scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];
let costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];
scoreDetail = (scores) => {
  for (let index = 0; index < scores.length; index++) {
    console.log(`score:#${scores[index]}  solution:#${index}`);
  }
};

totalScore = (scores) => {
  console.log(`Total number of scores are ${scores.length}`);
};

highestScore = (scores) => {
  console.log(`Highest score is ${Math.max(...scores)}`);
};

highestScoreIndex = (scores) => {
  let highestScoreVar = Math.max(...scores);
  let counter = 0;
  scores.forEach((element) => {
    if (highestScoreVar === element) {
      console.log(
        `highest score #${scores[counter]} at index position ${counter}`
      );
    }
    counter++;
  });
};
effectiveScoresCost = (scores, costs) => {
  let highestScoreVar = Math.max(...scores);
  let counter = 0;
  let ScoreCostObject = {};
  let lowestScoreCost = 0;
  let scoreCostIndex = 0;
  let scoreCostMultiplication = 0;
  scores.forEach((element) => {
    if (highestScoreVar === element) {
      ScoreCostObject[counter] = element;
    }
    counter++;
  });
  for (let key in ScoreCostObject) {
    ScoreCostObject[key] = ScoreCostObject[key] * costs[key];
  }
  lowestScoreCost = Math.min(...Object.values(ScoreCostObject));
  for (let key in ScoreCostObject) {
    if (ScoreCostObject[key] == lowestScoreCost) {
      scoreCostIndex = key;
      scoreCostMultiplication = ScoreCostObject[key];
    }
  }
  console.log(
    `The score with ${highestScoreVar} with cost ${
      costs[scoreCostIndex]
    } at index position ${scoreCostIndex} is most effective score cost ${"\n"}i.e: ${highestScoreVar}*${
      costs[scoreCostIndex]
    } = ${scoreCostMultiplication}`
  );
};
scoreDetail(scores);
totalScore(scores);
highestScore(scores);
highestScoreIndex(scores);
effectiveScoresCost(scores, costs);
