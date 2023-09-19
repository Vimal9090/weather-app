const apikey = "ad7b0ea94c86aa5959aa4d6d1dd67331"

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`

const searchInput = document.querySelector("#search-box input")
const searchBtn = document.querySelector("#search-box button")
const weatherImg = document.querySelector(".weather-img")

async function cheakWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`);
    const data = await response.json()
    console.log(data);
    // console.log(b);

    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector("#city").textContent = data.name
    document.querySelector("#humidity-num").textContent = data.main.humidity + "%"
    document.querySelector("#wind-num").textContent = Math.round(data.wind.speed) + "km/h"
 
    if(data.weather[0].main == "clear"){
        weatherImg.src = "images/clear.png"
    }else if(data.weather[0].main == "snow"){
        weatherImg.src = "images/snow.png"
    }else if(data.weather[0].main == "cloud"){
        weatherImg.src = "images/cloud.png"
    } else if(data.weather[0].main == "drizzle"){
        weatherImg.src = "images/drizzle.png"
    }else if(data.weather[0].main == "mist"){
        weatherImg.src = "images/mist.png"
    }else if(data.weather[0].main == "rain"){
        weatherImg.src = "images/rain.png"
    }

}
searchBtn.addEventListener("click",()=>{
    cheakWeather(searchInput.value)
})
cheakWeather(searchInput.value)