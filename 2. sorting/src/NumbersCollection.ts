import { Sorting } from "./Sorting";

export class NumbersCollections extends Sorting {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(num1Index: number, num2Index: number): boolean {
    return this.data[num2Index] < this.data[num1Index];
  }

  swap(index: number, anotherIndex: number): void {
    [this.data[index], this.data[anotherIndex]] = [
      this.data[anotherIndex],
      this.data[index],
    ];
  }
}
