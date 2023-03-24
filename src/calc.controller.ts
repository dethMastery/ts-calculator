import readLine from "readline";
import calculatorModel from "./calc.model";
import calculatorView from "./calc.view";

interface objectOptions {
  input1: number;
  input2: number;
  operator: string;
  res: number;
}

export default class calculatorController {
  private model: calculatorModel;
  private view: calculatorView;

  private operator: string;
  private res: number;

  constructor(inputModel: calculatorModel, inputView: calculatorView) {
    this.model = inputModel;
    this.view = inputView;
  }

  runCLI(input: { operator: string; no1: number; no2: number }): void {
    if (input.operator == "+") {
      this.operator = "+";
      this.res = this.model.add(input.no1, input.no2);
    } else if (input.operator == "-") {
      this.operator = "-";
      this.res = this.model.sub(input.no1, input.no2);
    } else if (input.operator == "*" || input.operator == "x") {
      this.operator = "x";
      this.res = this.model.multiply(input.no1, input.no2);
    } else if (input.operator == "/") {
      this.operator = "/";
      this.res = this.model.divide(input.no1, input.no2);
    }

    let usage: objectOptions = {
      input1: input.no1,
      input2: input.no2,
      operator: this.operator,
      res: this.res,
    };

    this.view.cliRender(usage);
  }

  runTUI(): void {
    let rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let userInput: objectOptions = {
      input1: 0,
      input2: 0,
      operator: this.operator,
      res: this.res,
    };

    rl.question(this.view.inputCheck(1), (data: string) => {
      userInput.input1 = parseInt(data);

      rl.question(this.view.inputCheck(2), (data: string) => {
        userInput.input2 = parseInt(data);

        rl.question(this.view.inputCheck(3), (data: string) => {
          userInput.operator = data;
    
          if (userInput.operator == "+") {
            userInput.res = this.model.add(userInput.input1, userInput.input2);
          } else if (userInput.operator == "-") {
            userInput.res = this.model.sub(userInput.input1, userInput.input2);
          } else if (userInput.operator == "*" || userInput.operator == "x") {
            userInput.res = this.model.multiply(userInput.input1, userInput.input2);
          } else if (userInput.operator == "/") {
            userInput.res = this.model.divide(userInput.input1, userInput.input2);
          }
    
          this.view.tuiRender(userInput.res);
          rl.close();
        })
      })
    });
  }
}
