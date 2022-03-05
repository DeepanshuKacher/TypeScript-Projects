"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readCSV_1 = __importDefault(require("./readCSV"));
const utility_1 = require("./utility");
class FootballCSV extends readCSV_1.default {
    returnModifiedVerisn(row) {
        return [
            (0, utility_1.stringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.default = FootballCSV;
