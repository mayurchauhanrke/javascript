"use strict";//treat all Js code as newer version
// alaert(3+3) //we are using nodejs, not browser
 
console.log(3+3); console.log("Mayur")//code readability should be high

// data types
/* PRIMITIVE DATATYPE
number=> 2 to power 53
bigint 
string=> ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique
*/
// object

console.log(typeof undefined);//undefined
console.log(typeof null);//object

/*
In JavaScript, the typeof operator returns a string indicating the type of a variable or expression. However, when applied to null, it returns the string "object." This is considered a historical mistake in JavaScript, and null is actually a primitive value, not an object. Despite the output of typeof, it's important to note that null is not an object in the traditional sense. It is a special value that represents the intentional absence of any object value. The incorrect "object" result from typeof null is a quirk in the language that has been preserved for backward compatibility.
*/