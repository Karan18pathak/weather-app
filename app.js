const apiKey="157a4650bd0a22b4a2fa5c4e58122751";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    
    console.log(`${apiUrl}=${city}&appid=${apiKey}`, 'url')
    const response = await fetch(`${apiUrl}=${city}&appid=${apiKey}`);
    
    

if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

}else{

    var data = await response.json();
    console.log(data.name);

    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerText=data.main.humidity +`%`;
    document.querySelector(".wind").innerText=data.wind.speed+`km/hr`;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="/images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="/images/clear.png"
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="/images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="/images/drizzle.png"
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="/images/snow.png"
    }else{
        weatherIcon.src="/images/mist.png"
    }
    document.querySelector(".weather").style.display="block";



}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


