const API_KEY = "1be8080ff386d0924647880c61b6cf27";

const form = document.getElementsByTagName("form");
const serch = document.querySelector("#serch");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    const url = `
https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${API_key}`;
const response = await fetch (url);
const data = response.json();
//show data fuctio call here
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> city is not found <h/>`
    }
    weather.innerHTML = `<div>
    <img src = "" ${data.weather[0].icon}@2x.png>
    </div>`
}



