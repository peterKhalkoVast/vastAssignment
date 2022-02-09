checkLongestWord = (params) => {
  let eachWordArr = params.split(" ");
  console.log(eachWordArr);
  let count = [];
  let temp = 0;
  let wordPosition = 0;
  let largestWord = [];
  eachWordArr.forEach((element) => {
    count.push(element.length);
  });
  for (let index = 0; index < count.length; index++) {
    if (count[index] > temp) {
      temp = count[index];
      wordPosition = index;
    }
  }
  //function to find if any other word with same length;
  eachWordArr.forEach((element) => {
    if (element.length == temp) largestWord.push(element);
  });
  console.log(
    `following words with largest length ${temp}: is/are:  ${largestWord}`
  );
};
checkLongestWord("my name is Peter abcde");
