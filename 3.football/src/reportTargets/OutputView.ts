import { OutputView } from "../Summary";

export default class ViewOutpur implements OutputView {
  print(outputfile: string): void {
    console.log(outputfile);
  }
}
