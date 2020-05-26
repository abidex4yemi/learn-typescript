"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.ROUTE_PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.GET);
exports.post = routeBinder(Methods_1.Methods.POST);
exports.put = routeBinder(Methods_1.Methods.PUT);
exports.del = routeBinder(Methods_1.Methods.DEL);
exports.patch = routeBinder(Methods_1.Methods.PATCH);
