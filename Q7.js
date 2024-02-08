//Explain the difference between JSON.stringify() and JSON.parse() using example

//Ans
//JSON.stringify():

//This function converts a JavaScript object or value into a JSON string.
//It's commonly used when you want to send data to a server or store it locally as a string.

let obj = { name: 'John', age: 30 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"John","age":30}'


//JSON.parse():

//This function parses a JSON string and converts it into a JavaScript object or value.
//It's used when you receive JSON data from a server or retrieve it from local storage.

let jsonString1 = '{"name":"John","age":30}';
let obj1 = JSON.parse(jsonString);
console.log(obj1); // Output: { name: 'John', age: 30 }
