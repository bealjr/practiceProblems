function toCamelCase(str){
  if(str.length === 0) return str;

  let stringArray;

   if(str.indexOf("-") > -1){
    stringArray = str.split('-');
  }

  if(str.indexOf("_") > -1){
    stringArray = str.split('_');
  }

  let outputString = stringArray.shift();

  stringArray.map(word => {
    outputString += word.split('')[0].toUpperCase() + word.slice(1);;
  })

  return outputString;
}
