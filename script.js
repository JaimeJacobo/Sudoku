


let arrayForRows = [0,0,0,0,0,0,0,0,0];

generateFirstRow = (()=>{
  for(let i = 0; i < arrayForRows.length; i++){
    calculateNumbers = (()=>{
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      if(arrayForRows.indexOf(randomNumber) == -1){
        arrayForRows[i] = randomNumber;
      } else {
        calculateNumbers();
      }
    })
    calculateNumbers();
  };
  for(let k = 1; k < 19; k++){
    for(let i = 0, m = 11; i < arrayForRows.length, m < 20; i++, m++){
      document.getElementById(m).innerHTML = arrayForRows[i];
    };
  }
  arrayForRows = [0,0,0,0,0,0,0,0,0];
});

generateSecondRow = (()=>{
  for(let i = 0; i < arrayForRows.length; i++){
    calculateNumbers = (()=>{
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      if(arrayForRows.indexOf(randomNumber) == -1){
        arrayForRows[i] = randomNumber;
      } else {
        calculateNumbers();
      }
    })
    calculateNumbers();
  };
  for(let i = 0, m = 21; i < arrayForRows.length, m < 30; i++, m++){
    document.getElementById(m).innerHTML = arrayForRows[i];
  };
  arrayForRows = [0,0,0,0,0,0,0,0,0];
});

generateFirstRow();
generateSecondRow();







