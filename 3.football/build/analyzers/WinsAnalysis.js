"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(winTeam) {
        this.winTeam = winTeam;
    }
    analyze(matcher) {
        let winTimes = 0;
        for (let match of matcher) {
            if (match[1] == this.winTeam && match[5] == MatchResult_1.MatchResult.HomeWin)
                winTimes++;
            else if (match[2] == this.winTeam && match[5] == MatchResult_1.MatchResult.AwayWin)
                winTimes++;
        }
        return `${this.winTeam} win ${winTimes} times`;
    }
}
exports.default = WinsAnalysis;
