var searchButton = $(".searchButton");
var apiKey = "b565f97a31ef7e75ac1020c5c87fddaa";

for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);
    var cityName = $(".list-group").addClass("list-group-item");
    cityName.append("<li>" + city + "</li>");
}