function lastDigit(as){
  if(as.length === 0) return 1;
  if(as[0] === 0 && as[1] === 0 && as.length === 2) return 1;
  return lastDigitPost(as);
}

function lastDigitPost(as){
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
  if(base > 9)
  var base = as.pop().toString().split('')[base.length - 1];
  console.log(base);
  var reducedExponent = (exponent % 4);
  if(reducedExponent === 0) reducedExponent = 4;
  var codeChartValue = exponentCodeChart[base][reducedExponent - 1];
  if(as.length === 0){
    return codeChartValue;
  }
  as.push(codeChartValue)
    return lastDigitPost(as);
}
