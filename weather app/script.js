const apiKey = "1b87b8e0588c972e57ea169e61ffea47";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed +"Km/h";

    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png"
    }
    if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png"
    }
    if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png"
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.vale);
    
})




