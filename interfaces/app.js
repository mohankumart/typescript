function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Hello";
}
var person = {
    firstName: "Max",
    name: "Mohan",
    age: 27,
    hobbies: ["cooking", "sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person);
//greet({name: "hello"}); // correct
//greet({name:"hello",age:28}); // throws error in this case
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("The is last name:", +lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "testing";
greet(myPerson);
myPerson.greet("Anything");
