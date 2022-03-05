"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
class ReadFootball {
    constructor(fileObj) {
        this.fileObj = fileObj;
        this.matcher = [];
    }
    load() {
        this.fileObj.read();
        this.matcher = this.fileObj.data.map((row) => {
            return [
                (0, utility_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.default = ReadFootball;
