//How to control the duration of an Ajax request? Give Example



//// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Specify the URL and HTTP method
let url = 'https://api.example.com/data';
let method = 'GET';

// Initialize the request
xhr.open(method, url, true);

// Set the timeout value (in milliseconds)
let timeoutValue = 5000; // 5 seconds
xhr.timeout = timeoutValue;

// Define a callback function to handle the response
xhr.onload = function() {
    if (xhr.status === 200) {
        // Request was successful
        console.log('Request successful!');
        console.log('Response:', xhr.responseText);
    } else {
        // Request failed
        console.error('Request failed with status:', xhr.status);
    }
};

// Define a callback function to handle timeout event
xhr.ontimeout = function() {
    console.error('Request timed out after', timeoutValue, 'milliseconds');
};

// Define a callback function to handle errors
xhr.onerror = function() {
    console.error('Request encountered an error');
};

// Send the request
xhr.send();
