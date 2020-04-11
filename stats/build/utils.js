"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    // Note: date format -> year/month/day
    // dateParts[1] - 1 -> because january is at position 0
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
