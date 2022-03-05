import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utility";
import CSVread from "./readCSV";

export type MatchResultTuple = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export default class ReadFootball {
  matcher: MatchResultTuple[] = [];
  constructor(public fileObj: CSVread) {}

  load() {
    this.fileObj.read();
    this.matcher = this.fileObj.data.map((row: string[]): MatchResultTuple => {
      return [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
