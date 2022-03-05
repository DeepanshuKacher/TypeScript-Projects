"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class OutputHTML {
    print(outputfile) {
        fs_1.default.writeFileSync("htmlReport.html", `<div><h1>This is html generated report</h1><h2>${outputfile}</h2></div>`);
    }
}
exports.default = OutputHTML;
