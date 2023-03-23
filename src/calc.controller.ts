import * as yargs from 'yargs'
import calcView from "./calc.view";

let calculate = new calcView()

yargs
  .command('add <no1> <no2>', 'Adds two numbers', {}, (argv: any) => {
    const result = calculate.add(argv.no1, argv.no2);
    console.log(`Result: ${result}`);
  })
  .command('subtract <no1> <no2>', 'Subtracts two numbers', {}, (argv: any) => {
    const result = calculate.subt(argv.no1, argv.no2);
    console.log(`Result: ${result}`);
  })
  .command('multiply <no1> <no2>', 'Multiplies two numbers', {}, (argv: any) => {
    const result = calculate.multiply(argv.no1, argv.no2);
    console.log(`Result: ${result}`);
  })
  .command('divide <no1> <no2>', 'Divides two numbers', {}, (argv: any) => {
    try {
      const result = calculate.divide(argv.no1, argv.no2);
      console.log(`Result: ${result}`);
    } catch (err: any) {
      console.log(err.message);
    }
  })
  .demandCommand(1, 'Please specify a command')
  .help()
  .argv;