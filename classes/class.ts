class Person {
	public name: string;
	private type: string = 'stduent';
	protected age: number = 28;
	
	constructor(name: string, public username: string){
		this.name = name;
	}	
	
	printAge(){
		console.log(this.age);
		this.setType("Student");
	}	

	private setType(type: string){
		this.type = type;
		console.log(this.type);
	}
}

const person = new Person('Mohan', 'mohan');
person.printAge();
// person.setType("Student"); // wont work as setType is private method

// Inheritance
class Max extends Person {
	constructor(username: string){
		super("Max", username);
		this.age = 31; // can access protected memebers from inherited class
		// console.log(this.type); Cant access the private members from inherited class
	}
}

const max = new Max("max");
console.log(max);

















