"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Summary {
    constructor(analyzer, showoutput) {
        this.analyzer = analyzer;
        this.showoutput = showoutput;
    }
    show(analyzeFile) {
        this.showoutput.print(this.analyzer.analyze(analyzeFile));
    }
}
exports.default = Summary;
