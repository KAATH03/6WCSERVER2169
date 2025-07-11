const {add, subtract, multiply, divide} = require('./calculation');

const ratePerHour = 500;
const hoursWorkedPerDay = 8;
const daysWorkedPerWeek = 7;

const grossIncome = multiply(multiply(ratePerHour, hoursWorkedPerDay), daysWorkedPerWeek);
console.log('The Gross Income:', grossIncome);

const tax = divide(grossIncome, 10);
console.log('Tax:', tax);

const sss = 1200;
console.log('SSS:', sss);

const pagibig = 300;
console.log('Pag-Ibig fund:', pagibig);

const philhealth = 400;
console.log('PhilHealth:', philhealth);

const totalDeductions = add(add(add(tax, sss), pagibig), philhealth);
console.log('Total deductions:', totalDeductions);

const netSalary = subtract(grossIncome, totalDeductions);
console.log('Net Salary:', netSalary);
