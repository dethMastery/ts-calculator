interface objectOptions {
  input1: number;
  input2: number;
  operator: string;
  res: number;
}

export default class calculatorView {
  cliRender(data: objectOptions): void {
    console.log("Result : " + data.input1 + " " + data.operator + " " + data.input2 + " = " + data.res);
  }

  inputCheck(round: number): any {
    let inputQuestion: string = 'Please enter (xRound) : '

    if (round == 1) {
      inputQuestion = inputQuestion.replace('(xRound)', '1st Number')
    } else if (round == 2) {
      inputQuestion = inputQuestion.replace('(xRound)', '2nd Number')
    } else if (round == 3) {
      inputQuestion = inputQuestion.replace('(xRound)', 'Operator')
    }

    return inputQuestion
  }

  tuiRender(result: number): void {
    console.log(`Result : ${result}`);
  }
}
