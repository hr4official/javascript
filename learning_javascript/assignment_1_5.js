/*

Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). 
[function convert_to_coins(amount) {...}]. You may choose to print the coin denominations used on the console.
E.g. convert_to_coins(87) should print 25 25 25 10 2.

*/


function convert_to_coins(amount) {
    var denominations = [25, 10, 5, 2, 1];
    var curr_denom_index = 0;
    while (amount > 0) {
      while (amount < denominations[curr_denom_index]) {
        curr_denom_index++;
      }
      amount = amount - denominations[curr_denom_index];
      console.log(denominations[curr_denom_index]);
    }
  }