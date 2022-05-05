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

module.exports = getCourse;