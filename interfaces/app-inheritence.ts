// Interface Inheitence

interface NamedPerson {
	name: string;
}

interface AgedPerson extends NamedPerson {
	age: number;
}

const oldPerson: AgedPerson = {
	name: "Hello",
	age: 58
}
