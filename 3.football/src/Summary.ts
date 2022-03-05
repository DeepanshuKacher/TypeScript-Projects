import { MatchResultTuple } from "./ReadFootball";

export interface Analyzers {
  analyze(matches: MatchResultTuple[]): string;
}

export interface OutputView {
  print(outputfile: string): void;
}

export default class Summary {
  constructor(public analyzer: Analyzers, public showoutput: OutputView) {}

  show(analyzeFile: MatchResultTuple[]) {
    this.showoutput.print(this.analyzer.analyze(analyzeFile));
  }
}
