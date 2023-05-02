var APIKey = "7eb5330d2f0977e81f7f2aaf26f016e6"
var fetchButton = document.getElementById("fetch-button")
var geoCall = "https://api.openweathermap.org/geo/1.0/direct?q="
var searchField = document.getElementById("search-field")
var apiExclude = "&exclude=minutely,hourly,alerts"
var apiCall = "https://api.openweathermap.org/data/2.5/onecall?"
var citySearch = document.getElementById("searchCity")





// Dom load

$(document).ready(function () {

})



//daily weather 
function renderWeather(weather){
    //daily
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results")
    // create h2 for name
    var city = document.createElement("h2")
    city.textContent = weather.name 
    resultsContainer.append(city)
    // create p for humidity, wind, description, temp (time)
    var temp = document.createElement("p")
    temp.textContent = "Temp: " + weather.main.temp + " F"
    resultsContainer.append(temp)

    var humidity = document.createElement ("p")
    humidity.textContent = "humidity: " + weather.main.humidity + " %"
    resultsContainer.append(humidity)
    
    var wind = document.createElement("p")
    wind.textContent = "wind: " + weather.wind.speed + " mph, " + weather.wind.deg + "°"
    resultsContainer.append(wind)

    var weatherDetails = weather.weather[0] 
    if (weatherDetails &&  weatherDetails.description){
        var description = document.createElement("p")
        description.textContent = weatherDetails.description
        resultsContainer.append(description)
    }


}



function fetchWeather(query) {
    var url = 
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query + 
    "&units=imperial&appid=7eb5330d2f0977e81f7f2aaf26f016e6"

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data))
        
}


function fetchForecast(query) {
    // var url = 
    // "https://api.openweathermap.org/data/2.5/weather?q=" +
    // query + 
    // "&units=imperial&appid=7eb5330d2f0977e81f7f2aaf26f016e6"
    

    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + query +    
     "&units=imperial&appid=" + APIKey


    fetch(url)
        .then((response) => response.json())
        //forecast
        .then((data) => console.log(data))  


}

// fetchWeather("london")

$('#fetch-button').click(function (event){

    event.preventDefault()
    event.stopPropagation()

    // Put city into varaible
    var searchCity = $('#search-field').val().trim()
    console.log($(this).text())

    // fetch city

    fetchWeather(searchCity)

    fetchForecast(searchCity)


    // console.log(searchCity)

})




//5 day


    





// //gets lat lon from city user typed in
// function getLatLon(query){
//     //gets city from text intput 
//     var city = searchField.val().trim()
//     fetch(geoCall+city+apiExclude+APIKey)
//         .then(function(response){
//             return response.json()
//         })
//         .then (function(data){
//             var cityLat = "lat="+data[0].lat
//             var cityLon = "&lon"+data[0].lon
//             //takes city lat and lon then sends it get forecast 
//             getCityData(cityLat, cityLon, city)
//             console.log(data);
//         })
// }

// //uses city lat and lon to get the forecast 
// function getCityData(cityLat,cityLon,city){
//     fetch(apiCall+cityLat+cityLon+"&units=imperial"+apiExclude+APIKey)
//     .then(function(data){
//         var cityData = data
//         showWeather(cityData, city, city)
//         console.log(data);
//     })
// }


// fetchButton.addEventListener('click', getLatLon)




// function getApi(){
//     var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=kansascity&limit=5&appid=7eb5330d2f0977e81f7f2aaf26f016e6"
//     fetch(requestUrl)
//         .then(function (response){
//             return response.json()
//         })
//         .then (function (data){
//             console.log(data);
//         })
// }

// //event listener form the button of search 
// $('city').click(function (event){
//     event.preventDefault()
//     event.stopPropagation()

//     var city = ('#city').val.trim

// })

// //get weather 
// function getWeather (city){
//     var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;



//     var lat, lon


// }