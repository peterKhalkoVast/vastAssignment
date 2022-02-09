convertToUppercase = (params) => {
  let tempVar;
  let rawString = params.split(" ");
  rawString.forEach((element) => {
    tempVar = element.toLowerCase();
    console.log(tempVar.charAt(0).toUpperCase() + tempVar.slice(1));
  });
};
convertToUppercase("my name is peter and IAM from INDIA and My NuMBer iS 8939");
