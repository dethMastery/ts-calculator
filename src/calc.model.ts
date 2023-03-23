export default class calculatorInput {
  no1: number
  no2: number
  operator: string
  res: number

  constructor (no1: number, no2: number, operator: string, res: number) {
    this.no1 = no1
    this.no2 = no2
    this.operator = operator
    this.res = res
  }
}