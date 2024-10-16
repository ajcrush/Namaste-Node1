console.log("Hello world");
var a = 2343;
var b = 3322;
// This callback is only pushed to callstack in v8 once the call stack is empty
setTimeout(() => {
  console.log("Call me asap");
}, 0);
function multiply(a, b) {
  const res = a * b;
  return res;
}
var c = multiply(a, b);
console.log("Multiplication result is ", c);
