# javascript


JavaScript and Java are completely different languages, both in concept and design.

JavaScript was invented by Brendan Eich in 1995

JavaScript was previously used mainly for making webpages interactive such as form validation, animation, etc. Nowadays, JavaScript is also used in many other areas such as server-side development, mobile app development and so on.

Because of its wide range of applications, you can run JavaScript in several ways:

    Using console tab of web browsers
    Using Node.js
    By creating web pages


1. Using Console Tab of Web Browsers

All the popular web browsers have built-in JavaScript engines. Hence, you can run JavaScript on a browser. To run JavaScript on a browser,

    Open your favorite browser (here we will use Google Chrome).
    Open the developer tools by right clicking on an empty area and select Inspect. Shortcut: F12.
    On the developer tools, go to the console tab. Then, write JavaScript code and press enter to run the code.
    
  



Rules for Naming JavaScript Variables

The rules for naming variables are:

    Variable names must start with either a letter, an underscore _, or the dollar sign 
    Variable names cannot start with numbers.
    JavaScript is case-sensitive. So y and Y are different variables.
    Keywords cannot be used as variable names.
    
 Notes:

    Though you can name variables in any way you want, it's a good practice to give a descriptive variable name. If you are using a variable to store the number of apples, it better to use apples or numberOfApples rather than x or n.
    In JavaScript, the variable names are generally written in camelCase if it has multiple words. For example, firstName, annualSalary, etc
    
    
JavaScript Constants
    
    The const keyword was also introduced in the ES6(ES2015) version to create constants. For example,

const x = 5;

Once a constant is initialized, we cannot change its value.

const x = 5;
x = 10;  // Error! constant cannot be changed.
console.log(x)

Simply, a constant is a type of variable whose value cannot be changed.

Also, you cannot declare a constant without initializing it. For example,

const x;  // Error! Missing initializer in const declaration.
x = 5;
console.log(x)
  
