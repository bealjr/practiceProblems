function nextBigger(n){
  var splitReverseArray = n.toString().split('').reverse();
  for(var i = 0; i < splitReverseArray.length; i++){
    var lastDigit = splitReverseArray.shift();
    i--;
    console.log(splitReverseArray.sort());
  }
}
