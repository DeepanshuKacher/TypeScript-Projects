"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class CSVread {
    constructor(finename) {
        this.finename = finename;
        this.data = [];
    }
    read() {
        this.data = fs
            .readFileSync(this.finename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map(this.returnModifiedVerisn);
    }
}
exports.default = CSVread;
