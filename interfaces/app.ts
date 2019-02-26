interface NamedPerson {
	name: string;
	age?: number;
	[propName: string]: any;
	greet(lastName: string): void;
}

function greet(person: NamedPerson){
	console.log("Hello, "+ person.name);
}

function changeName(person: NamedPerson){
	person.name = "Hello";
}

const person: NamedPerson = {
	firstName: "Max",
	name: "Mohan",
	age: 27,
	hobbies: ["cooking", "sports"],
	greet(lastName: string){
		console.log("Hi, I am "+ this.firstName + " "+ lastName);
	}
};

greet(person);
//greet({name: "hello"}); // correct
//greet({name:"hello",age:28}); // throws error in this case



class Person implements NamedPerson {
	firstName: string;
	name: string;
	greet(lastName: string){
		console.log("The is last name:", + lastName);
	};
}

const myPerson = new Person();
myPerson.firstName = "testing";
greet(myPerson);

myPerson.greet("Anything");







