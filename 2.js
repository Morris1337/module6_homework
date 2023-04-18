let userNumber = +prompt("Введите число: ")

function sum(number){
  if(!isNaN(number)){
  if(number > 1000){
    console.log("Данные не верны!")
    return
    }
    if(number <= 1 || number === 4){
      console.log("Число не являеться простым")
      return
    }
    for(let i = 2; i < Math.sqrt(number); i++ ){
      if(number % i == 0){
        console.log("Число не являеться простым")
        return
      }
    }
    console.log("Число являеться простым")
  }else{
    console.log("Введено не число!")
  }
}
  
  sum(userNumber);
  // sum(3);
  // sum(8);
  // sum(10);
  // sum(7);
  // sum(5);
  // sum(47);
  // sum(44);


  // function sum(number){
  //   if(number > 1000){
  //     console.log("Данные не верны!")
  //     return
  //     }else{
  //     cosnole.log("Проверка не сработала")
  //     }
  //   }
    
  //   sum(999);


