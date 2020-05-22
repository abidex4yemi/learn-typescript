var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collections) {
        this.collections = collections;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collections[index];
    };
    return ArrayOfAnything;
}());
var something = new ArrayOfAnything(['Y', 'e', 'm', 'i']);
console.log(something.get(2));
var printAnyThing = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
printAnyThing(['A', 'B', 'C', 'D']);
// Generic constraint
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a car');
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a house');
    };
    return House;
}());
// <T extends PrintAble> Limits the type we can pass to generics
function printHousesOrCar(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCar([new Car(), new Car()]);
printHousesOrCar([new House(), new House()]);
