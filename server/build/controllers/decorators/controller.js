"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
exports.router = AppRouter_1.AppRouter.getInstance();
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.ROUTE_PATH, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.METHOD, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.MIDDLEWARE, target.prototype, key) ||
                [];
            if (path) {
                exports.router[method].apply(exports.router, __spreadArrays(["" + routePrefix + path], middlewares, [routeHandler]));
            }
        }
    };
}
exports.controller = controller;
