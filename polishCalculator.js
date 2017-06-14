function calc(expr) {
  let splitExpression = expr.split(' ');

  if(!splitExpression[0]) return 0;

  let stack = [],

  valueIsNumber = function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  for(var i = 0; i < splitExpression.length; i++){
    let currentCharacter = splitExpression[i];

    if(valueIsNumber(currentCharacter)){

      stack.push(currentCharacter);

    } else {

      let number1 = stack.pop() * 1,
      number2 = stack.pop() * 1

      if(currentCharacter === '*'){
        stack.push(number2 * number1)
      }

      if(currentCharacter === '/'){
        stack.push(number2 / number1)
      }

      if(currentCharacter === '+'){
        stack.push(number2 + number1)
      }

      if(currentCharacter === '-'){
        stack.push(number2 - number1)
      }
    }
  }

   return stack.pop() * 1;
}
