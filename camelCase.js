function toCamelCase(str){
  console.log("this is input ", str);
  var outputString = '',
  stringArray,
  conversionTable = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z"
  },
  capsConversionTable = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z"
  };

  if(str.indexOf("-") !== -1) stringArray = str.split('_');
  if(str.indexOf("_") !== -1) stringArray = str.split('-');
	console.log("this is stringArray: ", stringArray);

  for(var idx = 0; idx < stringArray.length; idx++){
    var currentWord = stringArray[idx];

    for(var idx2 = 0; idx2 < currentWord.length; idx2++){
      var currentLetter = currentWord[idx2];
      if(idx === 0 && idx2 === 0 && capsConversionTable[currentLetter]){
        outputString += capsConversionTable[currentLetter];
        continue;
      }
      if(idx === 0 && idx2 === 0 && conversionTable[currentLetter]){
        outputString += capsConversionTable[currentLetter].toLowerCase();
        continue;
      }
      if(idx2 === 0){
        outputString += conversionTable[currentLetter];
        continue;
      } else {
        outputString += currentLetter;
      }
    }
  }
  return outputString;
}
