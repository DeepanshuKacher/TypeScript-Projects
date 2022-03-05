const fs = require("fs");

export default abstract class CSVread<T> {
  data: T[] = [];
  constructor(public finename: string) {}
  abstract returnModifiedVerisn(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.finename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.returnModifiedVerisn);
  }
}
