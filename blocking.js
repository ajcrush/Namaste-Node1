const crypto = require("crypto");
console.log("Hello world");
var a = 1232222;
var b = 2294;
//Synchronous function will block main thread dont use this
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Key1 is generated");
// password based key derivative function
// Async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Key is generated", key);
});
function multiply(a, b) {
  const res = a * b;
  return res;
}
var c = multiply(a, b);
console.log("Multiplication is ", c);
