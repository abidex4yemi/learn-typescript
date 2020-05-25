var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boat color is " + this.color;
        },
        enumerable: true,
        configurable: true
    });
    Boat.prototype.pilot = function (speed, generateWake) {
        if (speed === 'fast') {
            console.log('swish');
        }
        else {
            console.log('nothing');
        }
    };
    __decorate([
        testDecorator
    ], Boat.prototype, "color");
    __decorate([
        testDecorator
    ], Boat.prototype, "formattedColor");
    __decorate([
        logError('Something went wrong'),
        __param(0, parameterDecorator),
        __param(1, parameterDecorator)
    ], Boat.prototype, "pilot");
    Boat = __decorate([
        classDecorator
    ], Boat);
    return Boat;
}());
function classDecorator(constructor) {
    console.log(constructor);
}
function parameterDecorator(target, key, index) {
    console.log(key, index);
}
function testDecorator(target, key) {
    // console.log('Target:', target.color); // undefined
    console.log('Key:', key);
}
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        // desc.value = function () {
        //   try {
        //     method();
        //   } catch (e) {
        //     console.log(errorMessage);
        //   }
        // };
    };
}
