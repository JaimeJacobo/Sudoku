


// generateRandomNumber = (()=>{
//   number = Math.random() * 10;
//   number = Math.floor(number);
//   if(number > 0 && number <= 9){
//     return number;
//   } else {
//     return generateRandomNumber();
//   };
// });

// getRandomNumber = (()=>{
//   for(let i = 11; i <= 99; i++){
//     i = i.toString();
//     document.getElementById(i).innerHTML = generateRandomNumber();
//   };
// });

// getRandomNumber();


// let i = '19';
// document.getElementById(i).innerHTML = generateRandomNumber();


// document.getElementById('bubucela').onclick = function(){
//   alert('satania')

// }


generateRandomNumber = ((numberInt)=>{
  number = Math.random() * 10;
  number = Math.floor(number);
  if(number > 0 && number <= numberInt){
    return number - 1;
  } else {
    return generateRandomNumber();
  };
});


// numero en primera casilla == array[randomNumber] // borrar ese numero del array

//numero en segunda casilla === array[randomNumber]

console.log(generateRandomNumber(9));