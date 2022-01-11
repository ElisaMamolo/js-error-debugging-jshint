function powerOf3(num) {
    return number ** 3;
  }
  

  //instead of normally calling my funtion i use try-catch
  try {
    powerOfThree(9);
  } catch (error) {
      //error will get caught
    console.log("Gets executed if there's an error.");
    console.log(error);
  } finally {
    console.log('Gets executed at the end no matter what.');
  }
  

  //Exceptions types


  //RangeError: Raised when a numeric variable exceeds its allowed range.
  const goodArray = new Array(3);
console.log(goodArray);
// No error => [undefined × 3]

const badArray = new Array(-1);
// Error => Uncaught RangeError: Invalid array length(…)


//ReferenceError: Raised when an invalid reference is used.
const name = 'Ted';
console.log(nme);
// Uncaught ReferenceError: nme is not defined


//SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.
function doSomething(){
 //   console.log("I'm doing something!);
  //missing this next }
}
  // Uncaught SyntaxError: Unexpected end of input

//TypeError: Raised when the type of a variable is not as expected.
const name = 'Bob';
// (toFixed is a method for numbers)
name.toFixed();
// Uncaught TypeError: name.toFixed is not a function


//URIError: Raised when the encodeURI() or decodeURI() functions are used in an incorrect manner.
decodeURI('http:/google.com%');
// Uncaught URIError: URI malformed(…)

//EvalError: Raised when the eval() function is used in an incorrect manner
