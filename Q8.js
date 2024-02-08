//Write the example to parse any JSON string in javascript?

// Sample JSON string
let jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parsing the JSON string
let parsedObject = JSON.parse(jsonString);

// Accessing properties of the parsed object
console.log(parsedObject.name); // Output: John
console.log(parsedObject.age); // Output: 30
console.log(parsedObject.city); // Output: New York
