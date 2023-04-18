let num1 = +prompt("Введите начальное число: ")
let num2 = +prompt("Введите конечное число: ")

function count(num1, num2){
  let timerId = setInterval(function(){
  console.log(num1)
    if(num1 === num2){
      clearInterval(timerId);
    }
  num1++;
  }, 1000);  
}