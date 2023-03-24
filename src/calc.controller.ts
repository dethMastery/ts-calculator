import calculatorModel from "./calc.model";
import calculatorView from "./calc.view";

interface renderCLI {
  input1: number;
  input2: number;
  operator: string;
  res: number;
}

export default class calculatorController {
  private model: calculatorModel
  private view: calculatorView

  private operator: string
  private res: number

  constructor(inputModel: calculatorModel, inputView: calculatorView) {
    this.model = inputModel;
    this.view = inputView;
  }

  runCLI(input: {
    operator: string, no1: number, no2: number
  }): void {

    if (input.operator == "+") {
      this.operator = '+'
      this.res = this.model.add(input.no1, input.no2)
    } else if (input.operator == "-") {
      this.operator = '-'
      this.res = this.model.sub(input.no1, input.no2)
    } else if (input.operator == "*" || input.operator == "x") {
      this.operator = 'x'
      this.res = this.model.multiply(input.no1, input.no2)
    } else if (input.operator == "/") {
      this.operator = '/'
      this.res = this.model.divide(input.no1, input.no2)
    }

    let usage: renderCLI = {
      input1: input.no1,
      input2: input.no2,
      operator: this.operator,
      res: this.res
    }

    this.view.cliRender(usage)
  }
}
