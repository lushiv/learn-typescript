let a: [number, string, boolean]

a = [5, "harray", true]


// Readonly Tuple
// define our tuple
let ourTuple: [number, boolean, string];
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);