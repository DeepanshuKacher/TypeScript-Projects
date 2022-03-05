import { Analyzers } from "../Summary";
import { MatchResultTuple } from "../ReadFootball";
import { MatchResult } from "../MatchResult";

export default class WinsAnalysis implements Analyzers {
  constructor(public winTeam: string) {}

  analyze(matcher: MatchResultTuple[]): string {
    let winTimes = 0;

    for (let match of matcher) {
      if (match[1] == this.winTeam && match[5] == MatchResult.HomeWin)
        winTimes++;
      else if (match[2] == this.winTeam && match[5] == MatchResult.AwayWin)
        winTimes++;
    }

    return `${this.winTeam} win ${winTimes} times`;
  }
}
