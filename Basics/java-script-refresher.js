//-------------- Variables - let, Constant - const
// const name = "Max";
// let age = 29;
// const hasHobbies = true;

// age = 30;

// ----------- Functions
const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

//console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

//console.log(addRandom());

// ---------- Object

const person = {
  name: "Max",
  age: 29,
  // allows access to local 'this'
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

//person.greet();

// --------- Arrays

const hobbies = ["Sports", "Cooking", 1, true];
// Destructuring  - access with index - array 
const [ hobby1, hobby2, hobby3, hobby4 ] = hobbies; 
console.log(hobby1, hobby2, hobby3, hobby4);

// For Loop
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// -------------- Higher order methods
// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );
//console.log(hobbies);

hobbies.push("Programming");
//console.log(hobbies);

// Spread & Rest Operator
const copiedArray = hobbies.slice(); // exact copy
// ---- spread operator - pull out multiple items
const spreadArray = [...hobbies]; // pull out elements to add to new array
const copiedPerson = { ...person }; // any type can be spread

// ---- rest operator - merge multiple items
const toArray = (...args) => args;

//console.log(toArray(1, 2, 3, 4));

const printName = ({ name }) => {
  console.log(name);
};

// printName(person);

// Destructuring - acces with name of property - object 
const { name, age } = person;
console.log(name, age); // Max 29
