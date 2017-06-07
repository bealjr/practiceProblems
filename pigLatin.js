function pigIt(str){
  let pigLatinArray = str.split(' ').map((word) => {
    return word.slice(1, (word.length)) + word.slice(0, 1) + 'ay';
  })

  return pigLatinArray.join(' ')
}
