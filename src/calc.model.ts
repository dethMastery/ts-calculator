export default class calcModel {
  private no1: number
  private no2: number
  private operator: string

  constructor() {
    this.no1
    this.no2
    this.operator
  }

  add(no1: number, no2: number): any {
    return no1 + no2;
  }

  subt(no1: number, no2: number): any {
    return no1 - no2;
  }

  multiply(no1: number, no2: number): any {
    return no1 * no2;
  }

  divide(no1: number, no2: number): any {
    return no1 / no2;
  }
}