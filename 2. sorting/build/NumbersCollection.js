"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
const Sorting_1 = require("./Sorting");
class NumbersCollections extends Sorting_1.Sorting {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(num1Index, num2Index) {
        return this.data[num2Index] < this.data[num1Index];
    }
    swap(index, anotherIndex) {
        [this.data[index], this.data[anotherIndex]] = [
            this.data[anotherIndex],
            this.data[index],
        ];
    }
}
exports.NumbersCollections = NumbersCollections;
