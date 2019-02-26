// Simple Generic
function echo(data) {
    return data;
}
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho(27));
// Built in Generics
var testResults = [1, 2];
testResults.push(3);
console.log(testResults);
// Sample function
function loggingIdentity(arg) {
    //console.log(arg.length);
    return arg;
}
loggingIdentity("Mohan");
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'banana']);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
