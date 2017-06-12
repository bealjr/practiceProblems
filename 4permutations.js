function permutations(string) {
  var array = string.split("");
  var num = array.length;
  var result = [];
  generate(num, array);

  return result;

  function generate(n, a) {
    if(n == 1) {
      var perm = a.join("");
      if(result.indexOf(perm) < 0) {
        result.push(perm);
      }
    }
    else {
      for(var i=0; i<n-1; i++) {
        generate(n-1, a);
        if(n & 1) {
          a[0] = a.splice(n-1, 1, a[0])[0];
        }
        else {
          a[i] = a.splice(n-1, 1, a[i])[0];
        }
      }
      generate(n-1, a);
    }
  }
}
