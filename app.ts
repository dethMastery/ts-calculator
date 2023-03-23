#!/usr/bin/env node

import yargs from "yargs/yargs"

import kalModel from "./src/calc.model";
import kalView from "./src/calc.view";
import kalCon from "./src/calc.controller";

const model = new kalModel()
const view = new kalView()
const cont = new kalCon(model, view)

const argv: any = yargs(process.argv.slice(2))
                      .usage(
                        `just run "kalku <no1> <operator> <no2>"`
                      ).help().argv

if (argv._[0] != undefined) {
  cont.run(argv._[1], argv._[0], argv._[2])
} else {
  console.log('just run "yarn dev <no1> <opeartor> <no2>"');
  console.log('operator like "add", "sum", "minus", "multiply", "divide", "+" , "-", "*", "x", "/"');
  
}