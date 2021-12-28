/*

Write a factorial function that returns the factorial of a given number, n.
Make sure you return the calculated value and not just print it. [function factorial(n){...}] 

*/


function factorial(n) {
    var fact = 1;
    for (var i=1; i <= n; i++) {
      fact = fact * i;
    }
    return fact;
  }
  