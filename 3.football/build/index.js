"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readCSV_1 = __importDefault(require("./readCSV"));
const ReadFootball_1 = __importDefault(require("./ReadFootball"));
const Summary_1 = __importDefault(require("./Summary"));
const WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
const OutputHTML_1 = __importDefault(require("./reportTargets/OutputHTML"));
let obj = new readCSV_1.default("3.1 football.csv");
let obj1 = new ReadFootball_1.default(obj);
obj1.load();
let summary = new Summary_1.default(new WinsAnalysis_1.default("Man United"), new OutputHTML_1.default());
summary.show(obj1.matcher);
