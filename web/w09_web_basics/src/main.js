// This is a comment: Comments are useful to explain code and make it more readable

// Importing a module (assuming d3 is installed via npm)
import * as d3 from "d3"; 

// Create a variable: Variables store values that can be used later
let aString = "text";

// Defining a function using traditional syntax
function aFunction(firstParameter, secondParameter){
    return firstParameter + secondParameter; // Returns the sum of two parameters
}

// Defining a function using arrow function syntax (modern JavaScript)
const arrowFunction = (param1, param2) => param1 * param2; 

// Example of using an arrow function
console.log(arrowFunction(3, 4)); // Prints 12 (3 * 4)

// Create an array: Arrays store multiple values in an ordered list
let anArray = ["element1", aString, 10, 5, aFunction];

// Print all elements of anArray using a loop
for(let i = 0; i < anArray.length; i++){
    console.log(anArray[i]); // Logs each element in the array
}

// Create an object: Objects store key-value pairs (like a python dictionary)
// Objects can contain properties and methods (functions)
let anObject = {
    "aProperty": "valueOfAProperty", // String value
    "anotherProperty": 10, // Numeric value
    50: aFunction, // Function as a value
    "anAnonymousFunction": (parameter1) => parameter1 * 2, // Arrow function inside an object
    "booleanValue": true // Boolean value
}

// Accessing object properties
console.log(anObject["aProperty"]); // Prints "valueOfAProperty"
console.log(anObject.anotherProperty); // Prints 10
console.log(anObject.anAnonymousFunction(2)); // Prints 4

// Print all properties of the object
for(let property in anObject) {
    if(anObject.hasOwnProperty(property)){
        console.log(property + ":" + anObject[property]); // Logs property names and values
    }
}

// Example of using d3: Select the body and append a paragraph element
d3.select("body").append("p").text("Hello, D3!");
