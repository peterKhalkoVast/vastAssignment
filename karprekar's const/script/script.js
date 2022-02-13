let karperkarsLogic = () => {
  let initialNumber = document.querySelector("#input-number").value;
  const result = document.querySelector(".result");
  const finalResultToMatch = 6174;
  let ascendingOrder = [];
  let descendingOrder = [];
  let counter = 0;
  let temp = 0;
  console.log(finalResultToMatch.lenght);
  do {
    ascendingOrder = initialNumber.toString().split("").sort();
    descendingOrder = Number(ascendingOrder.reverse().join(""));
    ascendingOrder = Number(initialNumber.toString().split("").sort().join(""));
    temp = Number(descendingOrder) - Number(ascendingOrder);
    initialNumber = temp;
    counter++;
    console.log(
      `in the substraction No. ${counter} (${descendingOrder} - ${ascendingOrder}) result = ${temp}`
    );
    const resultArea = document.createElement("div");
    const node = document.createTextNode(
      `in the substraction No. ${counter} (${descendingOrder} - ${ascendingOrder}) result = ${temp}`
    );
    resultArea.appendChild(node);
    result.appendChild(resultArea);
    console.dir(resultArea);
  } while (temp != finalResultToMatch);
  document
    .querySelector("#input-number")
    .addEventListener("change", (event) => {
      result.innerHTML = "";
    });
};
