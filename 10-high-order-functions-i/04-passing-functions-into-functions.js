/* we know we can pass strings, or any value, into a function */

// function logsAType(value) {
//   console.log(typeof value);
// }
// logsAType('happy string');
// logsAType(true);
// logsAType([]);
// logsAType(null); // object
// logsAType(4);
/* 

if functions are like any other value, we can pass functions into other functions, too 

functions that take a function or return a function are called"higher-order functions" 

*/

// high order function -> takes in a function OR returns a function
// function logsAType(value) {
//   console.log(typeof value);
// }

// // call back function -> gets passed in
// function happyFunction() {
//   console.log('I am happy!');
// }
// logsAType(happyFunction);


/* 

if we want happyFunction to run, we have to call it 
https://goo.gl/E9hXZc
https://goo.gl/r7dHnj
*/

// high order function <= taking in a function
function callsAFunction(anotherFunction) {
  // anotherFunction => happyFunction
  console.log("running");
  // happyFunction;
  anotherFunction;
  console.log("done");
}

function happyFunction() {
  console.log('I am happy!');
}

callsAFunction(happyFunction);

// happyFunction();
