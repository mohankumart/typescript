interface DoubleValueFunc {
	(number1: number, number2: number): number;	
}


let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = function(value1: number, value2: number){
	return (value1 + value2) * 2;
	
}

console.log(myDoubleFunction(10, 20));
