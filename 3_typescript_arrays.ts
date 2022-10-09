const names: string[] = [];

names.push("Harry")
console.log(names)



// Readonly
const names_: readonly string[] = ["Dylan"];
names_.push("harry") // -->  Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

// Type Inference

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error


numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error