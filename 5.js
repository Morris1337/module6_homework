let x = +prompt("Введите число");
let n = +prompt("Введите число");

function sum(x, n){
  if(x < 1 || n < 1){
  console.log("Вы ввели не натуральное число")
}else{
console.log("x в степени n = " + Math.pow(x, n))
}
}

sum(x, n);