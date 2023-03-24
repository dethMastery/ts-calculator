#!/usr/bin/env node

import yargs from "yargs/yargs";

import calculatorModel from "./src/calc.model";
import calculatorView from "./src/calc.view";
import calculatorController from "./src/calc.controller";

const argv: any = yargs(process.argv.slice(2))
  .usage(`just run "kalku <no1> <operator> <no2>"`)
  .option("tui", {
    describe: "open Terminal UI",
    type: "boolean",
    default: false,
  })
  .help().argv;

let no1: number = parseInt(argv._[0])
let no2: number = parseInt(argv._[2])
let operator: string = argv._[1]

const model = new calculatorModel();
const cliView = new calculatorView();
const control = new calculatorController(model, cliView);

if (argv.tui) {
  control.runTUI()
} else {
  if (argv._[0] != undefined) {
    control.runCLI({no1, no2, operator});
  } else {
    console.log('just run "kalku <no1> <operator> <no2>"');
    console.log(
      'operator like "+" , "-", "x", "/"'
    );
  }
}
