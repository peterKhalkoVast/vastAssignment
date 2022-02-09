function makePhrases() {
  let word1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  let word2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  let word3 = ["process", "solution", "tipping-point", "strategy", "vision"];
  console.log(
    `${word1[Math.floor(Math.random() * word1.length)]} ${
      word2[Math.floor(Math.random() * word2.length)]
    } ${word3[Math.floor(Math.random() * word3.length)]} `
  );
}
makePhrases();
