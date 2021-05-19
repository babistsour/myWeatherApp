
window.addEventListener("load", ()=> {

	const API_key = `c412e6c30748a02f0ffac1380c356a7e`

// example === api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c412e6c30748a02f0ffac1380c356a7e

navigator.geolocation.getCurrentPosition((GeolocationPosition) => {
	let long = GeolocationPosition.coords.longitude
	let lat = GeolocationPosition.coords.latitude

	const city = document.querySelector(".city");
	const weather = document.querySelector(".day-weather")
	const temperature = document.querySelector(".temperature")
	const windSpeed = document.querySelector("#wind")
	const humi = document.querySelector("#humidity")
	const time = document.querySelector(".daytime")


	// @@@@@@@@@@@@@@@@ OLD XMLHTTPREQUEST METHOD @@@@@@@@@@@@@@@@@@

	// let request = new XMLHttpRequest();
	// request.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`);
	// request.send();
	// request.onload = () => {
	// 	console.log(request);
	// 	if (request.status === 200){
	// 		console.log(JSON.parse(request.response));
	// 	}
	// 		else {
	// 			console.log(`error ${request.status} ${request.statusText}`)
	// 		}
	// }

	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`)
		.then(response => {
			return response.json();
			})
			.then(data => {
				console.log(data)
				city.textContent = data.name
				weather.textContent = data.weather[0].description
				temperature.innerHTML = Math.round(data.main.temp) + "&deg";
				windSpeed.textContent = data.wind.speed + "m/s";
				humi.textContent = data.main.humidity + "%";

				time.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
				

				
			} )

			

		
		// .then(data => {
		// 	console.log(data.main.temp)
		// })

		
	
	
});

})


