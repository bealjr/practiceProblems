function lastDigit(as){


    var exponentCodeChart = {
      9 : [9, 1, 9, 1],
      8 : [8, 4, 2, 6],
      7 : [7, 9, 3, 1],
      6 : [6, 6, 6, 6],
      5 : [5, 5, 5, 5],
      4 : [4, 6, 4, 6],
      3 : [3, 9, 7, 1],
      2 : [2, 4, 8, 6],
      1 : [1, 1, 1, 1],
      0 : [0, 0, 0, 0]
  };

  var exponent = as.pop();
  var base = as.pop();
  if(base >= 10){
    base = base.toString().split('')[base.length - 1];
    base = Number(base)
  }
  var reducedExponent = (exponent % 4) - 1;
  if(reducedExponent === 0) reducedExponent = 4;
  var codeChartValue = exponentCodeChart[base][reducedExponent];
  if(as.length === 0){
    return codeChartValue;
  }
  as.push(codeChartValue)
    return lastDigit(as);
}

lastDigit([9,5,3,4,3])
