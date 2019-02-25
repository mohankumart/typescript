// Abstarct Classes

abstract class Project {
	projectName: string = "Default";
	budget: number = 100;	
	
	abstract changeName(name: string): void;
	
	calcBudget() {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	changeName(name: string): void {
		this.projectName = name;
	}

}






