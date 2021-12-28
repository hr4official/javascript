/*

 Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature 
  in fahrenheit] 

*/



function temp_converter(from, reading) {
    if (from === "celsius") {
      return (reading * 9/5) + 32 + " degree F";
    } else {
      return (reading -32) * 5 / 9 + " degree celsius";
    }
  }