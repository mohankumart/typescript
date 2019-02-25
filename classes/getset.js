"use strict";
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "abcd";
console.log(plant.species);
//# sourceMappingURL=getset.js.map