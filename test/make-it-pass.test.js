var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  sum = a + b;
  return sum; 
  // your code to make the test pass goes here ...
}


test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});