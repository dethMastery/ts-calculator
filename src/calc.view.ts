import calcModel from "./calc.model";

export default class kalView {
  render(no1: number, no2: number, operator: string, res: number): void {
    console.log('Result : ' + no1 + ' ' + operator + ' ' + no2 + ' = ' + res);
  }
}