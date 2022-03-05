import CSVread from "./readCSV";
import { stringToDate } from "./utility";
import { MatchResult } from "./MatchResult";

type MatchResultTuple = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export default class FootballCSV extends CSVread<MatchResultTuple> {
  returnModifiedVerisn(row: string[]): MatchResultTuple {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
