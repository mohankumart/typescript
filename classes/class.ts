class Person {
	public name: string;
	private type: string;
	protected age: number;
	
	constructor(name: string, public username: string){
		this.name = name;
		this.type = 'student';
		this.age = 28;
	}	

}
debugger;
const person = new Person('Mohan', 'mohan');



