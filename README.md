# weather-dashboard

# User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

# Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

# Description
Started with creating my skeleton html, then skeleton css. I also decided to add in a couple css links to help with styling. I used bootstrap and font awesome. After styling, I worked on the javascript functionality. The toughest part of this challenege was the 5-day forcast. I was happy to get it to generate however I'm still not sure if it's pulling in accurate data. Some of the weather temperatures were different than what my phone was showing but I was just happy to generate it at all so I kept with it and will look into that a bit more later. My weather dashboard is defaulted to show San Francisco temperature, after that you can use the search engine on the left side to input city of your choice. Once you add in the city of your choice it will save to local storage so you can easily access it at anytime without having to search of the city again. 

![Screenshot](https://user-images.githubusercontent.com/77821135/111095128-0bd30000-84fa-11eb-8d46-c08c5e5d3d1c.png)

Deployed link: https://shygois.github.io/weather-dashboard/
Github link: https://github.com/Shygois/weather-dashboard

