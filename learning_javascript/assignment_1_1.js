/*
  Write a javascript function named is_integer which checks if the passed argument is an integer.
  You can use any mathematical operator or functions defined in the Math object. 
*/
function is_integer(n) {
    return typeof(n) == "number" && Math.floor(n) == n;
  }

is_integer(2)