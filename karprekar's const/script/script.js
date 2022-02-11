document.querySelector("#calculate").addEventListener("click", (e) => {
  e.preventDefault();
  let initialNumber = document.querySelector("#input-number").value;
  let resultArea = document.querySelector(".result-area");
  const finalResultToMatch = 6174;
  let ascendingOrder = [];
  let descendingOrder = [];
  let counter = 1;
  let temp = 0;
  do {
    ascendingOrder = initialNumber.toString().split("").sort();
    descendingOrder = Number(ascendingOrder.reverse().join(""));
    ascendingOrder = Number(initialNumber.toString().split("").sort().join(""));
    temp = Number(descendingOrder) - Number(ascendingOrder);
    initialNumber = temp;
    counter++;
    resultArea.innerHTML = `in the ${counter} substraction(${descendingOrder} - ${ascendingOrder}) result = ${temp}`;
  } while (temp != finalResultToMatch);
});

function printResult(output, resultArea) {
  console.log("printint");
}
