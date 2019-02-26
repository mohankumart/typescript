interface NamedPerson {
	name: string;
}

function greet(person: NamedPerson){
	console.log("Hello, "+ person.name);
}

function changeName(person: NamedPerson){
	person.name = "Hello";
}

const person = {
	firstName: "Max",
	name: "Mohan",
	age: 27	
};

greet(person);
