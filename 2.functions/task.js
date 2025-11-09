function getArrayParams(...arr) {
  if (arr.length === 0) {
    return null;
  }


  let min = arr[0];
  let max = arr[0];
  let sum = 0;


  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

  
    if (current < min) {
      min = current;
    }

   
    if (current > max) {
      max = current;
    }

    sum += current;
  }

  
  const avg = parseFloat((sum / arr.length).toFixed(2));

 
  return {
    min: min,
    max: max,
    avg: avg
  };
}



const result1 = getArrayParams(-9, 99, 10, 66, 76);
console.log(result1); 







function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0, sumOddElement = 0;
  for (const num of arr) {
    if (num % 2 === 0) sumEvenElement += num;
    else sumOddElement += num;
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0, countEvenElement = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }


  if (countEvenElement === 0) return 0;

  return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
 
  if (arrOfArr.length === 0) {
    return 0;
  }


  let maxWorkerResult = func(...arrOfArr[0]);

 
  for (let i = 1; i < arrOfArr.length; i++) {
   
    const currentResult = func(...arrOfArr[i]);

   
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }


  return maxWorkerResult;
}
