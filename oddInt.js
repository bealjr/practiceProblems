function findOdd(A) {
  var intDict = {};
  for(var i = 0; i < A.length; i++){
    var curInt = A[i];
    if(intDict[curInt]) intDict[curInt]++;
    else {
    intDict[curInt] = 1;
    }
  }

  for(var int in A){
    if(A[int] % 2 === 0) return int;
  }
}
