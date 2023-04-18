function numArg(num1){
   i = 6
    return function(num2){
      j = 3
      console.log("Сумма двух чисел = " + (i + j))
    }
  }
  
  const result = numArg();
  
  result();