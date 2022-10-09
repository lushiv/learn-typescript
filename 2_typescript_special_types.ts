/*
Type: any
any is a type that disables type checking and effectively allows all types to be used.

The example below does not use any and will throw an error:

*/


// Example without any

// let u = true;
// u = "string"
// Math.round(u)


// Example with any
let v:any = true;
v = "string"
Math.round(v)

// Type: unknown
let w: unknown = 1;
w = "string"; // no error

// Type: never

let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

//Type: undefined & null
let y: undefined = undefined;
let z: null = null;
