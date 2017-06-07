function sumStrings(a,b) {
if(!a) return b;
if(!b) return a;

let arrayOfDigits1 = a.split(''),
arrayOfDigits2 = b.split(''),
sum = [],
addTen = false,
onesDigit,
digitSum,
restOfLargerNumber,
greaterThan10 = function(){
	onesDigit = digitSum.slice(1);
    sum.unshift(onesDigit)
    addTen = true;
},
lessThan10 = function(){
	sum.unshift(digitSum);
    addTen = false;
}
//clean up zeros on inputs with preceding zeros
while(arrayOfDigits1[0] === '0'){
  arrayOfDigits1.shift()
}

while(arrayOfDigits2[0] === '0'){
  arrayOfDigits2.shift()
}

//standardize inputs so stringNumber of greater length is always arrayOfDigits2

if(arrayOfDigits1.length > arrayOfDigits2.length){
  let copy = arrayOfDigits1;
  arrayOfDigits1 = arrayOfDigits2;
  arrayOfDigits2 = copy;
}

  arrayOfDigits1.reverse().join('');
  arrayOfDigits2.reverse().join('');

  for(var idx = 0; arrayOfDigits1[idx]; idx++){

	//if addTen is true, this means that we need to "carry the one" and the code reflects this.
   addTen ? digitSum = (arrayOfDigits1[idx] * 1 + arrayOfDigits2[idx] * 1 + 1).toString() : digitSum = (arrayOfDigits1[idx] * 1 + arrayOfDigits2[idx] * 1).toString()

   //if the sum of the two digits from inputs is greater than 9, this means we need to "carry the one" and the helper function greaterThan10 helps accomplish this
	digitSum > 9 ? greaterThan10() : lessThan10()
  };

  //at this point, we have parsed through our inputs to the extent that the shorter input has been added to the larger input.  All that is left to take care of is the remaining preceding digits in our longer input.

  addTen ? restOfLargerNumber = ((arrayOfDigits2.slice(idx).reverse().join('') * 1 + 1).toString()) : restOfLargerNumber = arrayOfDigits2.slice(idx).reverse().join('');
  sum.unshift(restOfLargerNumber);

  return sum.join('')
}
