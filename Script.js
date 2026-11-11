hiconsole.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// ==================================
// JAVASCRIPT: SYNCHRONOUS EXECUTION
// ==================================

console.log("===== SYNCHRONOUS =====");

console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");


// ==================================
// JAVASCRIPT: ASYNCHRONOUS EXECUTION
// ==================================

console.log("\n===== ASYNCHRONOUS =====");

console.log("1 - Start");

setTimeout(() => {
    console.log("2 - This is delayed by 2 seconds");
}, 2000);

console.log("3 - End");


// ==================================
// JAVASCRIPT: MULTIPLE TIMEOUTS
// ==================================

console.log("\n===== EVENT LOOP =====");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 1000);

console.log("E");


// ==================================
// END OF PROGRAM
// ==================================
