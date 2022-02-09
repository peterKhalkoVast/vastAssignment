checkPalindrome = (params) => {
  if (typeof params == "string") {
    let reverseParams = params.split("").reverse().join("");
    if (reverseParams == params) {
      console.log(`${params} is palindrome`);
    } else {
      console.log(
        `${params} reverse is ${reverseParams} ...it is not palindrome`
      );
    }
  } else {
    let tempParams = params;
    let reminder = 0;
    sum = 0;
    while (params > 0) {
      reminder = params % 10; //extract reminder
      sum = sum * 10 + reminder; //keep on adding digits
      params = parseInt(params / 10); //removes the right most single digit
    }
    console.log(sum, tempParams);
    if (sum == tempParams) {
      console.log(`The given number ${tempParams} is palindrome`);
    } else {
      console.log(
        `The given number ${tempParams} reverse is ${sum} which is not a palindrome`
      );
    }
  }
};
checkPalindrome(123);
