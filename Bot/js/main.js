console.log("Im alive")

function displayAnswer() {
  document.getElementById("Answer").innerHTML = answer()
}

const myHeaders = new Headers();
myHeaders.append("apikey", "O1FqERv8pJgMgEm1EkNjvh69OntweE0R");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};




function getCourse() {
  let data = document.querySelector('#Answer')
  fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=CZK&base=EUR", requestOptions)
    .then(response =>
    {
      return response.text().then(function (text){
        data.innerHTML = "1 EUR = " + text.split(":")[6].replaceAll("}","")
      })
    })

}









function getTime() {
  const time = Date.now()
  return new Date(time)
}

function getName() {
  return "bot"
}

function getCommand() {
  const command = document.getElementById("input").value;
  return command
}

function getHelp() {
  return "Command list: time \n name \n course \n help "
}

function answer() {
  let command = getCommand();
  switch (command) {
    case "time": return getTime()
    case "name": return getName()
    case "course": return getCourse()
    case "help": return getHelp()
    default: return "Command dost not exist. Write help to show commands"
  }


}




