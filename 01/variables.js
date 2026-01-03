// Your first Program.
console.log("Hello World!");

var name; // var declaration, initialization is optional
// guess the output
console.log(name); // Output => Undefined

let carName; // let declaration, initialization is optional
carName = "Volvo"; // initialization
console.log(carName); // Output => Volvo

// All the above variables declared exist in the Global Scope

function functionScope() {
  let name = "John Doe"; // Variable that exists in function scope.
  console.log(`This is a function scope variable: ${name}`);
}
functionScope();

// "i" is a varibale that exists in the block scope.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Variable Hoisting
console.log(hoistedVariable); // Output => Undefined
var hoistedVariable = 200;

// The below code works the same as the above code but is easier to understand.
var hoistedVariable1;
console.log(hoistedVariable1);
hoistedVariable1 = 300;

// Constant declaration
const pokemon = "pikachu"; // const declaration, initialization is required. Read-only
console.log(pokemon); // Output => pikachu

// Reassignment is NOT allowed
const user = { name: "Bruce Lee" };
// user = {}; // Error

// Mutation is allowed
user.name = "Jackie Chan";
console.log(user.name); // Output => Jackie Chan
