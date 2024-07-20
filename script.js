//! JSON = (JavaScript Object Notation) data-Interchange format
//?        Used for exchanging data between a server and a web application
//*        JSON files [key:value] OR [value, value2, value3]

//?        JSON.stringify() = converts a JS object to a JSON string
//?        JSON.parse() = converts a JSON string to a JS object


// TODO: JSON.stringify()

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// }
// const people = [{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
// },
// {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
// },
// {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
// }]

// const jsonString = JSON.stringify(people);

// console.log(jsonString);


// TODO: JSON.parse()

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},{"name": "Patrick", "age": 34, "isEmployed": false},{"name": "Squidward", "age": 50, "isEmployed": true},{"name": "Sandy", "age": 27,"isEmployed": false}]`;

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

// TODO: Fetch JSON file

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));