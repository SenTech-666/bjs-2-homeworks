"use strict";

function solveEquation(a, b, c) {

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    return [root1, root2];
  }
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, -2, 1));
console.log(solveEquation(1, 2, 3)); 



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthlyRate = (percent / 100) / 12;

    const loanBody = amount - contribution;

    if (loanBody <= 0) {
        return 0;
    }

    const monthlyPayment = loanBody * (
        monthlyRate + (
            monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)
        )
    );
  
    const totalPayment = monthlyPayment * countMonths;

    return Math.round(totalPayment * 100) / 100;
}