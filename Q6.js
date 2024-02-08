//What is the correct Json content type?

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});


//Content-Type: application/json
