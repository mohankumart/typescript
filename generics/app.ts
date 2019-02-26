// Simple Generic
function echo(data: any){
	return data;
}

// Better Generic
function betterEcho<T>(data: T){
	return data;
}

console.log(betterEcho(27));


// Built in Generics

const testResults: Array<number> = [1, 2];
testResults.push(3);
console.log(testResults);

// Sample function
function loggingIdentity<T>(arg: T): T {
	//console.log(arg.length);
	return arg;
}

loggingIdentity<string>("Mohan");

//Arrays
function printAll<T>(args: T[]){
	args.forEach(element => console.log(element));
}

printAll<string>(['Apple', 'banana']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));



