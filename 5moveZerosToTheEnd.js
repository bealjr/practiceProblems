function moveZeros(arr){
  let zeroArray = [];
  let filteredArray = arr.filter((el) => {
    if(el===0) zeroArray.push(0);
    return el !== 0
    })
  return filteredArray.concat(zeroArray);
}



// var moveZeros = function (arr) {
//   let zeroArray = [];

//   for(var idx = 0; idx < arr.length; idx++){
//     let currentItem = arr[idx];

//     if(currentItem === 0){
//       let currentZero = arr.splice(idx, 1);
//       zeroArray.push(currentZero[0]);
//       idx--
//     }
//   }

//   return arr.concat(zeroArray)

// }
