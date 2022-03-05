"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorting_1 = require("./Sorting");
class StringCollection extends Sorting_1.Sorting {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(num1Index, num2Index) {
        return (this.data[num1Index].toLocaleLowerCase() >
            this.data[num2Index].toLocaleLowerCase());
    }
    swap(index, anotherIndex) {
        let charArr = this.data.split("");
        [charArr[index], charArr[anotherIndex]] = [
            charArr[anotherIndex],
            charArr[index],
        ];
        this.data = charArr.join("");
    }
}
exports.StringCollection = StringCollection;
