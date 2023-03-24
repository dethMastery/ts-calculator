interface renderCLI {
  input1: number;
  input2: number;
  operator: string;
  res: number;
}

export default class calculatorView {
  cliRender(data: renderCLI): void {
    console.log("Result : " + data.input1 + " " + data.operator + " " + data.input2 + " = " + data.res);
  }
}
