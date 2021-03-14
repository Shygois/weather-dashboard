var searchButton = $(".searchButton");
var apiKey = "b565f97a31ef7e75ac1020c5c87fddaa";
for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);
    var cityName = $(".list-group").addClass("list-group-item");
    cityName.append("<li>" + city + "</li>");
}
var keyCount = 0;
searchButton.click(function () {
    var searchInput = $(".searchInput").val();
    // curent weather working
    var urlCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey;
    //5 day forecast
    var urlFiveDay = "http://api.openweathermap.org/data/2.5/forcast?q=" + searchInput + "&appid=" + apiKey;
    if (searchInput === " ") {
        console.log(searchInput);
    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then(function (response){
            var cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<li>" + response.Name + "</li>");
            //local storage
            var local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount + 1;
            // append current weather
            var currentCard = $(".currentCard").append("<div>").addClass("card-body");
            currentCard.empty();
            var currentName = currentCard.append("<p>");
            currentCard.append(currentName);
            // change date
            var timeUTC = new Date(response.dt * 1000);
            currentName.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
            currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            // add current temperature
            var currentTemp = currentName.append("<p>");
            currentName.append(currentTemp);
            currentTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");
            // add humidity
            currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");
            // add miles per hour winds
            currentTemp.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>");
            // UV url
            var urlUV = `https://api.openweathermap.org/data/2.5/uvi?appid=b565f97a31ef7e75ac1020c5c87fddaa&lat=${response.coord.lat}&lon=${response.coord.lon}`;
            // UV index
            $.ajax({
                url: urlUV,
                method: "GET"
            }).then(function (response) {
                var currentUV = currentTemp.append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
                currentUV.addClass("UV");
                currentTemp.append(currentUV);
            });
        });
         
    }
});