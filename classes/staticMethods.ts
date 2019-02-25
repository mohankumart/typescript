// static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number){
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));