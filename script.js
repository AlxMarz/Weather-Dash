var APIKey = "7eb5330d2f0977e81f7f2aaf26f016e6";
var fetchButton = document.getElementById("fetch-button");
var geoCall = "https://api.openweathermap.org/geo/1.0/direct?q=";
var searchField = document.getElementById("search-field");
var apiExclude = "&exclude=minutely,hourly,alerts";
var apiCall = "https://api.openweathermap.org/data/2.5/onecall?";
var citySearch = document.getElementById("searchCity");

// Dom load

$(document).ready(function () {});

//daily weather
function renderWeather(weather) {
  //daily
  console.log(weather);
  // space
  var resultsContainer = document.querySelector("#weather-results");
  // create h2 for name
  var city = document.createElement("h2");
  city.textContent = weather.name;
  resultsContainer.append(city);
  // create p for humidity, wind, description, temp (time)
  var temp = document.createElement("p");
  temp.textContent = "Temp: " + weather.main.temp + " F";
  resultsContainer.append(temp);

  var humidity = document.createElement("p");
  humidity.textContent = "humidity: " + weather.main.humidity + " %";
  resultsContainer.append(humidity);

  var wind = document.createElement("p");
  wind.textContent =
    "wind: " + weather.wind.speed + " mph, " + weather.wind.deg + "°";
  resultsContainer.append(wind);

  var weatherDetails = weather.weather[0];
  if (weatherDetails && weatherDetails.description) {
    var description = document.createElement("p");
    description.textContent = weatherDetails.description;
    resultsContainer.append(description);
  }
}

function fetchWeather(query) {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=imperial&appid=7eb5330d2f0977e81f7f2aaf26f016e6";

  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}

function fetchForecast(query) {
  // var url =
  // "https://api.openweathermap.org/data/2.5/weather?q=" +
  // query +
  // "&units=imperial&appid=7eb5330d2f0977e81f7f2aaf26f016e6"

  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    query +
    "&units=imperial&appid=" +
    APIKey;

  fetch(url)
    .then((response) => response.json())
    //forecast
    .then(function (response) {
      console.log(response);

      var header = $("<h4>")
        .attr("class", "card-header p-2 mt-4")
        .text("5-Day Forecast:");

      $("#five").prepend(header);

      // Five day forecast

      $.each(response.list, function (i, day) {
        var time = moment(day.dt_txt).hour();

        console.log(i, day.dt_txt, time);
        if (time == 15) {
          var card = $("<div>").attr(
            "class",
            "card text-white text-center bg-primary m-2 ",
          );

          var date = $("<div>")
            .text(moment(day.dt_txt).format("ddd, Do"))
            .attr("class", "card-header");
          var body = $("<div>").attr("class", "card-body");
          var img = $("<img>").attr(
            "src",
            "http://openweathermap.org/img/wn/" +
              day.weather[0].icon +
              "@2x.png",
          );
          // c.append(img)
          var temp = $("<div>")
            .text("Temp: " + day.main.temp + " F")
            .attr("class", "card-text ");
          var hum = $("<div>")
            .text("Humidity: " + day.main.humidity + "%")
            .attr("class", "card-text ");

          body.append(img, temp, hum);
          card.append(date, body);
          $("#foreCast").append(card);
        }
      });
    });
}

$("#fetch-button").click(function (event) {
  event.preventDefault();
  event.stopPropagation();

  // Put city into varaible
  var searchCity = $("#search-field").val().trim();
  console.log($(this).text());

  // fetch city

  fetchWeather(searchCity);

  fetchForecast(searchCity);

  // console.log(searchCity)
  function clearResults() {
    var resultsContainer = document.querySelector("#weather-results");
    resultsContainer.innerHTML = "";
    // Source - https://stackoverflow.com/a/6798187
    // Posted by alex, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-02-18, License - CC BY-SA 3.0
    var forecastContainer = document.querySelector('#five')
    forecastContainer.innerHTML = ""
  }
  clearResults();
});

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

//
