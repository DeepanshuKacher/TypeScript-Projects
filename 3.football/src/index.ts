import CSVread from "./readCSV";
import ReadFootball from "./ReadFootball";
import Summary from "./Summary";
import WinsAnalysis from "./analyzers/WinsAnalysis";
import ViewOutpur from "./reportTargets/OutputView";
import OutputHTML from "./reportTargets/OutputHTML";

let obj = new CSVread("3.1 football.csv");
let obj1 = new ReadFootball(obj);

obj1.load();

let summary = new Summary(new WinsAnalysis("Man United"), new OutputHTML());
summary.show(obj1.matcher);
