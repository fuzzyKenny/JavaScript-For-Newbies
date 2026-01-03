// Your first Program.
console.log("Hello World!");

var name; // var declaration, initialization is optional
// guess the output
console.log(name); // Output => Undefined

let carName; // let declaration, initialization is optional
carName = "Volvo"; // initialization
console.log(carName); // Output => Volvo

const pokemon = "pikachu"; // const declaration, initialization is required.
console.log(pokemon); // Output => pikachu

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
