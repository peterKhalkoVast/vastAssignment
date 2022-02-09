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
effectiveScoreCount = (scores, costs) => {
  let highestScoreVar = Math.max(...scores);
  let counter = 0;
  let ScoreCostObject = {};
  let costing = [];

  scores.forEach((element) => {
    if (highestScoreVar === element) {
      ScoreCostObject[counter] = element;
    }
    counter++;
  });
  console.log(ScoreCostObject);
  for (let key in ScoreCostObject) {
    costing.push(key, ScoreCostObject[key] * costs[key]);
  }
  console.log("index adding", costing);
  console.log(
    `cost effective score ${highestScoreVar} at costs: ${Math.min(...costing)}`
  );
};
// scoreDetail(scores);
// totalScore(scores);
// highestScore(scores);
//highestScoreIndex(scores);
effectiveScoreCount(scores, costs);
