const API_KEY = "1be8080ff386d0924647880c61b6cf27";

const form = document.querySelector("form");
const serch = document.querySelector("#serch");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
const response = await fetch (url);
const data = await response.json();
showWeather(data);
}

const showWeather = (data) => {
    if (data.cod == 404 ) {
        weather.innerHTML = `<h2> city is not found <h/>`
        return;
    }
    weather.innerHTML = `<div>
    <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt = "weather icon">
    </div>
    <div>
    <h2>${data.main.temp} °C</h2>
    <h4>${data.weather[0].main}</h4>
    </div>`
}

form.addEventListener("submit",function (event) {
    getWeather(serch.value);
    event.preventDefault();
});



