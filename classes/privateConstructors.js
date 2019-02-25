"use strict";
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var right = OnlyOne.getInstance();
// let test = new OnlyOne('The only one'); Cannot use new here as constructor is private
//# sourceMappingURL=privateConstructors.js.map