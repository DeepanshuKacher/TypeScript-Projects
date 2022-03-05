"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorting = void 0;
class Sorting {
    sort() {
        const { length } = this;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorting = Sorting;
