namespace MyMath {
	const PI = 3.14;

	export function calCircumference(diameter: number){
		return diameter * PI;
	}

	export function calRectangle(width: number, length: number){
		return width * length;
	}
}


console.log(MyMath.calCircumference(2));

