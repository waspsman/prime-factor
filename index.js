const { findConsecutive } = require("./prime");

console.time("execution time");
const result = findConsecutive(4);
console.timeEnd("execution time");
console.log("result: ", result);
