let kaprekarsConst = () => {
  //assigning variables and const
  let initialNumber = document.querySelector("#input-number").value;
  const finalResultToMatch = 6174;
  let ascendingOrder = [];
  let descendingOrder = [];
  if (initialNumber == 0 || initialNumber.length < 4) {
    alert("The substraction is resulting to 0 || number is < 4 digit || NaN ");
    return;
  }
  //converting into array first with split and sorting,  then joining back array into number format
  ascendingOrder = initialNumber.split("").sort();
  descendingOrder = Number(ascendingOrder.reverse().join(""));
  ascendingOrder = Number(initialNumber.split("").sort().join(""));
  initialNumber = Number(descendingOrder) - Number(ascendingOrder);

  //creating and appending data into the DOM
  const result = document.querySelector(".result");
  const resultArea = document.createElement("div");
  const node = document.createTextNode(
    `in the substraction (${descendingOrder} - ${ascendingOrder}) result = ${initialNumber}`
  );
  resultArea.appendChild(node);
  result.appendChild(resultArea);
  document.querySelector("#input-number").value = "";
  //if the substraction doesnot reach to 6174 we call the function recursively below else return;
  if (initialNumber != finalResultToMatch) {
    document.querySelector("#input-number").value = initialNumber;
    kaprekarsConst();
  } else {
    return;
  }
  //on changing the input field for new data set reset the created and append element into DOM to null;
  document
    .querySelector("#input-number")
    .addEventListener("change", (event) => {
      result.innerHTML = "";
      let givenNumber = document.querySelector("#input-number").value;
      document.querySelector(
        ".givenNumber"
      ).innerHTML = `Given Number ${givenNumber}`;
    });
};
//below kaprekars logic with do while loop
// let karperkarsLogic = () => {
//   let initialNumber = document.querySelector("#input-number").value;
//   const result = document.querySelector(".result");
//   const finalResultToMatch = 6174;
//   let ascendingOrder = [];
//   let descendingOrder = [];
//   let counter = 0;
//   let initialNumber = 0;
//   do {
//     ascendingOrder = initialNumber.toString().split("").sort();
//     descendingOrder = Number(ascendingOrder.reverse().join(""));
//     ascendingOrder = Number(initialNumber.toString().split("").sort().join(""));
//     initialNumber = Number(descendingOrder) - Number(ascendingOrder);
//     initialNumber = initialNumber;
//     counter++;
//     console.log(
//       `in the substraction No. ${counter} (${descendingOrder} - ${ascendingOrder}) result = ${initialNumber}`
//     );
//     const resultArea = document.createElement("div");
//     const node = document.createTextNode(
//       `in the substraction No. ${counter} (${descendingOrder} - ${ascendingOrder}) result = ${initialNumber}`
//     );
//     resultArea.appendChild(node);
//     result.appendChild(resultArea);
//     console.dir(resultArea);
//   } while (initialNumber != finalResultToMatch);
//   document
//     .querySelector("#input-number")
//     .addEventListener("change", (event) => {
//       result.innerHTML = "";
//     });
// };
