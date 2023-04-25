var APIKey = "7eb5330d2f0977e81f7f2aaf26f016e6"


//event listener form the button of search 
$('city').click(function (event){
    event.preventDefault()
    event.stopPropagation()

    var city = ('#city').val.trim

})

//get weather 
function getWeather (city){
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;



    var lat, lon


}