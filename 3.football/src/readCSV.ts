const fs = require("fs");

export default class CSVread {
  data: string[][] = [];
  constructor(public finename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.finename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
