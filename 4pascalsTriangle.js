function pascalsTriangle(n, rows, returnArray, previousRow){
  if(n === 1) return [1];

  if(!returnArray){
    returnArray = [1];
    previousRow = returnArray;
    rows = 1;
  }

  let currentRow = [];

  for(let idx = 0; idx < previousRow.length + 1; idx++){
    if(idx === 0 || idx === previousRow.length){
      currentRow.push(1);
      continue;
    }
    currentRow.push(previousRow[idx] + previousRow[idx - 1])
  }

  returnArray = returnArray.concat(currentRow);
  rows++

  if(rows === n){
    return returnArray;
  };

  previousRow = currentRow;

  return pascalsTriangle(n, rows, returnArray, previousRow);
}
