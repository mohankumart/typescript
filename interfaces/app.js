function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Hello";
}
var person = {
    firstName: "Max",
    age: 27
};
greet(person);
