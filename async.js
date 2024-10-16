const fs = require("fs");
const https = require("https");
console.log("Hello world");

var a = 10239;
var b = 39944;
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Api fetch successfully");
});
setTimeout(() => {
  console.log("Timeout called after 5 sec");
}, 5000);
// Sync
fs.readFileSync("./file.txt", "utf-8");
// Async
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data : ", data);
});
function multiply(a, b) {
  return a * b;
}
c = multiply(a, b);
console.log("Multiplication result is : ", c);
