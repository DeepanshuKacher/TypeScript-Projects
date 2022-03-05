import fs from "fs";
import { OutputView } from "../Summary";

export default class OutputHTML implements OutputView {
  print(outputfile: string): void {
    fs.writeFileSync(
      "htmlReport.html",
      `<div><h1>This is html generated report</h1><h2>${outputfile}</h2></div>`
    );
  }
}
