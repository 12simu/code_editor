const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '52d285abeemsh57a16669dd99288p170a31jsn1a581ef7f35e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather=(city)=>{
    cityName.innerHtml=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        cloud_pct.innerHtml = response.cloud_pct
        temp.innerHtml = response.temp
        feels_like.innerHtml = response.feels_like
        humidity.innerHtml = response.humidity
        min_temp.innerHtml = response.min_temp
        max_temp.innerHtml = response.max_temp
        wind_speed.innerHtml = response.wind_speed
        wind_degrees.innerHtml = response.wind_degrees
        sunrise.innerHtml = response.sunrise
        sunset.innerHtml = response.sunset
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)})
    getWeather("Chennai")