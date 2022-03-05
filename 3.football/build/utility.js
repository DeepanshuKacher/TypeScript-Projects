"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
function stringToDate(strDate) {
    //10/08/2018
    const valDate = strDate
        .split("/")
        .map((item) => Number(item));
    return new Date(valDate[0], valDate[1] - 1, valDate[2]);
}
exports.stringToDate = stringToDate;
