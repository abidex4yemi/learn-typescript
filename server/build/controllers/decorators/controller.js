"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
exports.router = AppRouter_1.AppRouter.getInstance();
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
