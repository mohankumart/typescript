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


// Getters and Setters
class Plant {
	private _species: string = 'default';
	
	set species(value: string){
		if(value.length > 3){
			this._species = value;
		}else{
			this._species = "default";
		}
	}	

	get species(){
		return this._species;
	}
}

let plant = new Plant();
console.log(plant.species);
plant.species = "abcd";
console.log(plant.species);


// static properties and methods
class Helpers {
	static PI: number = 3.14;
	static calcCircumference(diameter: number){
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));













