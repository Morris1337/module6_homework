function numAsk(){
  let Message = +prompt ("Ваше сообщение")
  let result = Message;
  console.log("Тип данных: "+typeof(result)+ ", число которое ввел пользователь = "+ Message)
  }
  numAsk()