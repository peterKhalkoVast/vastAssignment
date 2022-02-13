let createPerson = (person) => {
  let name = person.name;
  let age = person.age;
  return {
    name,
    age,
  };
};
let person = {
  name: "Peter",
  age: 25,
};
console.log(createPerson(person));
