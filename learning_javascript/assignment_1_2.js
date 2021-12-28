/*

Using the forEach function defined for an array, 
find the sum of the array of numbers. [function add_all(arr) {...}] 

*/

function add_all(arr) {
    var sum = 0;
    arr.forEach(function(e) {sum += e;});
    return sum;
  }
add_all([1,2,3,4,5])