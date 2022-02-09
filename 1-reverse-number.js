reverseNumber = (params) => {
  console.log(typeof params);
  if (typeof params === "string") {
    let numArr = params.toString().split("");
    console.log(numArr.reverse().join(""));
  } else {
    let reminder = 0;
    sum = 0;
    while (params > 0) {
      reminder = params % 10; //extract reminder
      sum = sum * 10 + reminder; //keep on adding digits
      params = parseInt(params / 10); //removes the right most single digit
    }
    console.log(sum);
  }
};

reverseNumber(123);
