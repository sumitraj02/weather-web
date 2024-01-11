const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const cloud_pct = document.getElementById("cloud_pct")
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			temp.innerHTML = response.temp;
		    temp2.innerHTML = response.temp;
			cloud_pct.innerHTML = response.cloud_pct;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_speed2.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
		.catch(err => console.error(err));
};

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	const cityInput = document.getElementById("city");
	getWeather(cityInput.value);
});

getWeather("Delhi");
