import { Sorting } from "./Sorting";
export class StringCollection extends Sorting {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(num1Index: number, num2Index: number): boolean {
    return (
      this.data[num1Index].toLocaleLowerCase() >
      this.data[num2Index].toLocaleLowerCase()
    );
  }

  swap(index: number, anotherIndex: number): void {
    let charArr = this.data.split("");

    [charArr[index], charArr[anotherIndex]] = [
      charArr[anotherIndex],
      charArr[index],
    ];

    this.data = charArr.join("");
  }
}
