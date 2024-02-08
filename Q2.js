//find specific objects in an array of objects using JavaScript

// Sample array of objects
let arrayOfObjects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' }
];

// Using forEach loop to find objects with name 'Alice'
let foundObjects = [];
arrayOfObjects.forEach(obj => {
    if (obj.name === 'Alice') {
        foundObjects.push(obj);
    }
});

console.log(foundObjects); // Output: [{ id: 2, name: 'Alice' }, { id: 4, name: 'Alice' }]
