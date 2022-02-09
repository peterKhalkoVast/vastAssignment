checkOccurence = (params) => {
  let letter = 0;
  let letterTraverse = 0;
  let counter = 0;
  let oneWord = params.replace(/ /g, ""); // //g is global replacement for replace method else only first match is replace with (" ", "")
  console.log(oneWord); //mynameispeter
  for (letter in oneWord) {
    for (letterTraverse in oneWord) {
      if (oneWord[letter] == oneWord[letterTraverse]) {
        counter++;
      }
    }
    console.log(`${oneWord[letter]} : ${counter} `); //can be enhanced with Json key value pair to ignore duplicate logging
    counter = 0;
  }
};
checkOccurence("my name is peter");
