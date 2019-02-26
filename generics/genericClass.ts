// Generic Class

class SimpleMath<T extends number> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		return +this.baseValue + +this.multiplyValue;
	}
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 30;
console.log(simpleMath.calculate());

