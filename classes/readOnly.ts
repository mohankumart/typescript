class Student {
	public readonly name: string;
	
	constructor(name: string){
		this.name = name;
	}
}

let obj = new Student("Mohan");
console.log(obj.name);
// obj.name = 'kumar'; cant add name to readonly property
