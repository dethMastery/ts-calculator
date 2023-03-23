import kalModel from "./calc.model";
import kalView from "./calc.view";

export default class kalOut {
  private kalModel: kalModel
  private kalLog: kalView

  constructor(kalModel: kalModel, kalLog: kalView) {
    this.kalModel = kalModel;
    this.kalLog = kalLog;
  }

  run(operator: string, no1: number, no2: number): void {
    if (operator == "add" || operator == "sum" || operator == "+") {
      this.kalLog.render(no1, no2, '+', this.kalModel.add(no1, no2))
    } else if (operator == "minus" || operator == "-") {
      this.kalLog.render(no1, no2, '-', this.kalModel.subt(no1, no2))
    } else if (operator == "*" || operator == "x" || operator == "multiply") {
      this.kalLog.render(no1, no2, 'x', this.kalModel.multiply(no1, no2))
    } else if (operator == "/" || operator == "divide") {
      this.kalLog.render(no1, no2, '/', this.kalModel.divide(no1, no2))
    }
  }
}
