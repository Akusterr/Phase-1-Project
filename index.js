// ////////////////
// // Data Objects
// ////////////////
// const dates = {
//     weekday: {
//         0: "Sunday",
//         1: "Monday",
//         2: "Tuesday",
//         3: "Wednesday",
//         4: "Thursday",
//         5: "Friday",
//         6: "Saturday"
//     },
//     month: {
//         0: "January",
//         1: "February",
//         2: "March",
//         3: "April",
//         4: "May",
//         5: "June",
//         6: "July",
//         7: "August",
//         8: "September",
//         9: "October",
//         10: "November",
//         11: "December"
//     }
// }

// const temperature_units =  [
//     {
//         unit: "fahrenheit",
//         abbreviation: "°F"
//     },
//     {
//         unit: "celsius",
//         abbreviation: "°C"
//     }
// ]

/////////erase below??////




////////////////////
// Global Variables
////////////////////
let currentLocation = {
    city: "New York City",
    state: "New York",
    state_abbreviation: "NY",
    zip: "10004",
    latitude: "40.6964",
    longitude: "-74.0253"
};

// Temperature unit will default to Fahrenheit
let currentTemperatureUnit = data.temperature_units[0];


//////////////////
// DOM Selectors
//////////////////
const temperatures = document.querySelectorAll(".temperature-number");
const temperatureUnits = document.querySelectorAll(".temperature-unit");
const formLocation = document.querySelector("#location-form");
const stateDropDown = document.querySelector("#state");
const currentDay = document.querySelector("#current-day");
const currentLocationP = document.querySelector("#location-information");
const currentTemp = document.querySelector("#current-temp");
const currentTempUnit = document.querySelector("#current-temp-unit");
const btnFahrenheit = document.querySelector("#fahrenheit-button");
const btnCelsius = document.querySelector("#celsius-button");
// const btnToggleTemperatureUnit = document.querySelector("#temperature-toggle");
const currentHighLowTemperature = document.querySelector("#today-high-low");
const currentDescription = document.querySelector("#current-description");
const row = document.querySelector(".row");

const inputSubmitButton = document.querySelector("#location-submit")
const body = document.querySelector("body");


////////////////////////
//Spotify Songs
///////////////////////
=======
const states = [
    {
        "abbreviation": "AL",
        "state": "Alabama"
    },
    {
        "abbreviation": "AK",
        "state": "Alaska"
    },
    {
        "abbreviation": "AZ",
        "state": "Arizona"
    },
    {
        "abbreviation": "AR",
        "state": "Arkansas"
    },
    {
        "abbreviation": "CA",
        "state": "California"
    },
    {
        "abbreviation": "CO",
        "state": "Colorado"
    },
    {
        "abbreviation": "CT",
        "state": "Connecticut"
    },
    {
        "abbreviation": "DE",
        "state": "Delaware"
    },
    {
        "abbreviation": "FL",
        "state": "Florida"
    },
    {
        "abbreviation": "GA",
        "state": "Georgia"
    },
    {
        "abbreviation": "HI",
        "state": "Hawaii"
    },
    {
        "abbreviation": "ID",
        "state": "Idaho"
    },
    {
        "abbreviation": "IL",
        "state": "Illinois"
    },
    {
        "abbreviation": "IN",
        "state": "Indiana"
    },
    {
        "abbreviation": "IA",
        "state": "Iowa"
    },
    {
        "abbreviation": "KS",
        "state": "Kansas"
    },
    {
        "abbreviation": "KY",
        "state": "Kentucky"
    },
    {
        "abbreviation": "LA",
        "state": "Louisiana"
    },
    {
        "abbreviation": "ME",
        "state": "Maine"
    },
    {
        "abbreviation": "MD",
        "state": "Maryland"
    },
    {
        "abbreviation": "MA",
        "state": "Massachusetts"
    },
    {
        "abbreviation": "MI",
        "state": "Michigan"
    },
    {
        "abbreviation": "MN",
        "state": "Minnesota"
    },
    {
        "abbreviation": "MS",
        "state": "Mississippi"
    },
    {
        "abbreviation": "MO",
        "state": "Missouri"
    },
    {
        "abbreviation": "MT",
        "state": "Montana"
    },
    {
        "abbreviation": "NE",
        "state": "Nebraska"
    },
    {
        "abbreviation": "NV",
        "state": "Nevada"
    },
    {
        "abbreviation": "NH",
        "state": "New Hampshire"
    },
    {
        "abbreviation": "NJ",
        "state": "New Jersey"
    },
    {
        "abbreviation": "NM",
        "state": "New Mexico"
    },
    {
        "abbreviation": "NY",
        "state": "New York"
    },
    {
        "abbreviation": "NC",
        "state": "North Carolina"
    },
    {
        "abbreviation": "ND",
        "state": "North Dakota"
    },
    {
        "abbreviation": "OH",
        "state": "Ohio"
    },
    {
        "abbreviation": "OK",
        "state": "Oklahoma"
    },
    {
        "abbreviation": "OR",
        "state": "Oregon"
    },
    {
        "abbreviation": "PA",
        "state": "Pennsylvania"
    },
    {
        "abbreviation": "RI",
        "state": "Rhode Island"
    },
    {
        "abbreviation": "SC",
        "state": "South Carolina"
    },
    {
        "abbreviation": "SD",
        "state": "South Dakota"
    },
    {
        "abbreviation": "TN",
        "state": "Tennessee"
    },
    {
        "abbreviation": "TX",
        "state": "Texas"
    },
    {
        "abbreviation": "UT",
        "state": "Utah"
    },
    {
        "abbreviation": "VT",
        "state": "Vermont"
    },
    {
        "abbreviation": "VA",
        "state": "Virginia"
    },
    {
        "abbreviation": "WA",
        "state": "Washington"
    },
    {
        "abbreviation": "WV",
        "state": "West Virginia"
    },
    {
        "abbreviation": "WI",
        "state": "Wisconsin"
    },
    {
        "abbreviation": "WY",
        "state": "Wyoming"
    }
];
//////erase above?????////




// const weatherMappings = {
//     "0": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: '<i class="fa-solid fa-sun"></i>',
//         pictureClassName: 'sunnyPicture',
//         description: "clear sky"
//     },
//     "1": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: '<i class="fa-solid fa-sun"></i>',
//         pictureClassName: 'sunnyPicture',
//         description: "mainly clear"
//     },    
//     "2": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1CKvinIoExZec5pv8OHtzU?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: '<i class="fa-solid fa-cloud-sun"></i>',
//         pictureClassName: 'cloudSun',
//         description: "partly cloudy"
//     },
//     "3": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1CKvinIoExZec5pv8OHtzU?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: '<i class="fa-solid fa-cloud"></i>',
//         pictureClassName: 'cloudSun',
//         description: "overcast"
        
//     },
//     "45": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/28xVpYZV65WjduLWVtamfK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: `<i class="fa-solid fa-water"></i>`,
//         pictureClassName: 'cloudSun',
//         description: "fog"
//     },  
//     "48": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0Zg4tjgfqw9qzq7lXX2sUM?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: `<i class="fa-solid fa-smog"></i>`,
//         pictureClassName: 'cloudSun',
//         description: "depositing rime fog"
//     },
//     "51": {
//         embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26AnwFHmManlVCg0toINJc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
//         icon: `<i class="fa-solid fa-cloud-rain"></i>`,
//         pictureClassName: 'rainy',
//         description: "light drizzle"
//     },

    "53": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2qvToeBdYliw6n0nEsKJQa?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`,
        pictureClassName: 'rainy',
        description: "moderate drizzle"
    },    
    "55": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-showers-heavy"></i>`,
        pictureClassName: 'rainy',
        description: "dense drizzle"
    },
    "56": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zJMFf0EzbGCpL0zROfmVF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-meatball"></i>`,
        pictureClassName: 'rainy',
        description: "light freezing drizzle"
    },
    "57": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zJMFf0EzbGCpL0zROfmVF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-meatball"></i>`,
        pictureClassName: 'rainy',
        description: "dense freezing drizzle"
    },
    "61": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zJMFf0EzbGCpL0zROfmVF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`,
        pictureClassName: 'rainy'
    },
    "63": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3i25w2HOWoafnTIiWJCL71?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`,
        pictureClassName: 'rainy',
        description: "slight rain"
    },
    "65": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26AnwFHmManlVCg0toINJc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-showers-heavy"></i>`,
        pictureClassName: 'rainy',
        description: "moderate rain"
    },
    "66": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3LGsgpx4TfxhXbr07OFKqs?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "heavy rain"
    },
    "67": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3LGsgpx4TfxhXbr07OFKqs?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "heavy freezing rain"
    },
    "71": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3OhwaetItNaTXxn0mr9SkN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "slight snowfall"
    },
    "73": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "moderate snowfall"
    },
    "75": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "heavy snowfall"
    },
    "77": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "snow grains"
    },
    "80": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`,
        pictureClassName: 'rainy',
        description: "slight rain showers"
    },
    "81": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`,
        pictureClassName: 'rainy',
        description: "moderate rain showers"
    },
    "82": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-showers-heavy"></i>`,
        pictureClassName: 'rainy',
        description: "heavy rain showers"
    },
    "85": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "slight snow showers"
    },
    "86": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`,
        pictureClassName: 'lakeAndTrees',
        description: "heavy snow showers"
    },
    "95": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-bolt"></i>`,
        pictureClassName: 'thunder'
        description: "thunderstorm"
    },
    "96": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-bolt"></i>`,
        pictureClassName: 'thunder',
        description: "thunderstorm with slight hail"
    },
    "99": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-bolt"></i>`,
        pictureClassName: 'thunder',
        description: "thunderstorm with heavy hail"
    }
}


// ////////////////////
// // Global Variables
// ////////////////////
// let currentLocation;

// // Temperature unit will default to Fahrenheit
// let currentTemperatureUnit = temperature_units[0];


// /////////////////
// // DOM Selectors
// /////////////////
// const body = document.querySelector("body");
// const formLocation = document.querySelector("#location-form");
// const selectState = document.querySelector("#state");
// const spanCurrentDay = document.querySelector("#current-day");
// const pCurrentLocation = document.querySelector("#location-information");
// const pCurrentTemperature = document.querySelector("#current-temperature");
// const btnFahrenheit = document.querySelector("#fahrenheit-button");
// const btnCelsius = document.querySelector("#celsius-button");
// const pTodayHighLowTemperature = document.querySelector("#today-high-low");
// const pCurrentDescription = document.querySelector("#weather-description");
// const divRow = document.querySelector(".row");
// const btnSubmit = document.querySelector("#location-submit");
// const targetIcon = document.getElementById('currentWeatherIcon');
// const targetPlayer = document.getElementById('spotifyTarget');


// ///////////////////
// // Event Listeners
// ///////////////////
// formLocation.addEventListener("submit", (e) => {
//     e.preventDefault();
//     handleLocationSubmit(e);
//     e.target.clear();
// });

// btnFahrenheit.addEventListener("click", () => setTemperatureUnit(0));
// btnCelsius.addEventListener("click", () => setTemperatureUnit(1));

// btnSubmit.addEventListener('mouseover', (e) => mouseOver(e));
// const mouseOver = (e) => {
//     btnSubmit.style.color = "#5C15C8";
// }

// btnSubmit.addEventListener('mouseout', (e) => mouseOut(e));
// const mouseOut = (e) => {
//     btnSubmit.style.color = "black";
// }


// //////////////////////
// // Callback Functions
// //////////////////////
// const handleLocationSubmit = (e) => {
//     console.log(e.target);
//     const zipCode = e.target["zip-code"].value;
//     if (zipCode) {
//         handleLocationSubmitByZipCode(zipCode);
//     } else {
//         const state = e.target.state.value;
//         const city = e.target.city.value;
//         handleLocationSubmitByCityState(city, state);
//     }
// }

// const handleLocationSubmitByZipCode = (zipCode) => {
//     fetch(`https://api.zippopotam.us/us/${zipCode}`)
//         .then(resp => resp.json())
//         .then(locationData => {
//             console.log(locationData);
//             updateLocationFromZipCode(locationData);
//         })
//         //.catch(alert(`${zipCode} not found.`));
// }

// const handleLocationSubmitByCityState = (city, state) => {
//     console.log(`https://api.zippopotam.us/us/${state}/${city}`);
//     fetch(`https://api.zippopotam.us/us/${state}/${city}`)
//         .then(resp => resp.json())
//         .then(locationData => {
//             console.log(locationData);
//             updateLocationFromCityState(locationData, city, state);
//         })
//         //.catch(alert(`${city}, ${state} not found.`));
// }

// const updateLocationFromZipCode = (locationData) => {
//     let newLocation = {
//         city: locationData.places[0]["place name"],
//         stateAbbreviation: locationData.places[0]["state abbreviation"],
//         stateName: locationData.places[0].state,
//         zipCode: locationData["post code"],
//         latitude: locationData.places[0].latitude,
//         longitude: locationData.places[0].longitude
//     }
//     currentLocation = newLocation;

//     patchLocation(currentLocation);
//     renderLocation();
//     getWeatherData(currentLocation);
// }

// const updateLocationFromCityState = (locationData, city, state) => {
//     let newLocation = {
//         city: city,
//         stateAbbreviation: state,
//         stateName: "",
//         zipCode: locationData.places[0]["post code"],
//         latitude: locationData.places[0].latitude,
//         longitude: locationData.places[0].longitude
//     }
//     currentLocation = newLocation;

//     patchLocation(currentLocation);
//     renderLocation();
//     getWeatherData(currentLocation);
// }

// const patchLocation = (location) => {
//     fetch("http://localhost:3000/location/1", {
//         method: 'PATCH',
//         headers:{
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: JSON.stringify(location)
//     })
//     .then(resp => resp.json())
//     .then(location => console.log(location))
//     .catch("Location not updated.");
// }

// const getWeatherData = (location) => {
//     let latitude = location.latitude;
//     let longitude = location.longitude;
//     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&temperature_unit=${currentTemperatureUnit.unit}&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York`)
//         .then(resp => resp.json())
//         .then(weatherData => {
//             console.log(weatherData);
//             renderCurrentWeather(weatherData);
//         })
//         .catch(`Could not fetch weather data for ${location.city}, ${location.state_abbreviation} ${location.zip}`);
// }

// const getWeekday = (timestamp) => {
//     let numWeekday = new Date(timestamp * 1000).getDay();
//     return dates.weekday[numWeekday];
// }

// const getDate = (timestamp) => {
//     let date = new Date(timestamp * 1000);
//     return `${getWeekday(timestamp)}, ${dates.month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
// }

// const setTemperatureUnit = (unit) => {
//     if (currentTemperatureUnit !== unit) {
//         currentTemperatureUnit = temperature_units[unit];
//         getWeatherData(currentLocation);
//     }
// }


// ///////////////////
// // Render Functions
// ///////////////////
// const renderStates = () => {
//     states.forEach(state => {
//         let option = document.createElement("option");
//         option.value = state.abbreviation;
//         option.textContent = state.state;
//         selectState.appendChild(option);
//     })
// }

// const renderLocation = () => {
//     pCurrentLocation.textContent = `${currentLocation.city}, ${currentLocation.stateAbbreviation}`;
// }

const renderCurrentWeather = (weatherData) => {

    currentDay.textContent = getDate(weatherData.current_weather.time);



    //  currentTemp.textContent = `${weatherData.current_weather.temperature}`
    // currentTempUnit.textContent = `${weatherData.hourly_units.temperature_2m}`;
    currentDescription.textContent = getDescriptionFromWeatherCode(weatherData);



    currentTemp.textContent = `${weatherData.current_weather.temperature}${weatherData.hourly_units.temperature_2m}`;
    let high = `${weatherData.daily.apparent_temperature_max[0]}${weatherData.hourly_units.temperature_2m}`;    
    let low = `${weatherData.daily.apparent_temperature_min[0]}${weatherData.hourly_units.temperature_2m}`;   
    currentHighLowTemperature.textContent = `${high} / ${low}`;

    
    // btnFahrenheit.textContent = currentTemperatureUnit.abbreviation;
    // let high = `${weatherData.daily.apparent_temperature_max[0]}${weatherData.hourly_units.temperature_2m}`;
    // let low = `${weatherData.daily.apparent_temperature_min[0]}${String.fromCodePoint(176)}`;
    // let low = `${weatherData.daily.apparent_temperature_min[0]} ${weatherData.hourly_units.temperature_2m}`;


  //const weatherMapping = weatherMappings[weatherData.current_weather.weathercode];

  //Box display
  //spanCurrentDay.textContent = getDate(weatherData.current_weather.time);
  //pCurrentTemperature.textContent = `${weatherData.current_weather.temperature}${weatherData.hourly_units.temperature_2m}`;
    
////erase below??////
  
  
//btnFahrenheit.textContent = currentTemperatureUnit.abbreviation;
//let high = `${weatherData.daily.apparent_temperature_max[0]}${weatherData.hourly_units.temperature_2m}`;
//let low = `${weatherData.daily.apparent_temperature_min[0]}${String.fromCodePoint(176)}`;
//let low = `${weatherData.daily.apparent_temperature_min[0]} ${weatherData.hourly_units.temperature_2m}`;
//erase above?/////

  
//let high = `${weatherData.daily.apparent_temperature_max[0]}${weatherData.hourly_units.temperature_2m}`;
//let low = `${weatherData.daily.apparent_temperature_min[0]}${weatherData.hourly_units.temperature_2m}`;
//pTodayHighLowTemperature.textContent = `${high} / ${low}`;


//     targetIcon.innerHTML = weatherMapping.icon;

//     pCurrentDescription.textContent = weatherMappings[weatherData.current_weather.weathercode].description;

//     // Background image
//     const className= weatherMapping.pictureClassName
//     body.className = weatherMappings[weatherData.current_weather.weathercode].pictureClassName;
    
//     // Spotify
//     targetPlayer.innerHTML = weatherMapping.embededPlayer;

//     // Daily Weather
//     renderDailyWeather(weatherData);
// }

// const renderDailyWeather = (weatherData) => {
//     divRow.innerHTML = "";

//     weatherData.daily.time.forEach(day => {
//         let i = weatherData.daily.time.indexOf(day);

//         // Bottom row does not display today's weather
//         if (i > 0) {

//             let div = document.createElement("div");
//             div.className = "col-2 weekday";

//             let strongWeekday = document.createElement("strong");
//             strongWeekday.textContent = getWeekday(day);

//             let hr = document.createElement("hr");

//             let icon = document.createElement("i");
//             icon.innerHTML = weatherMappings[weatherData.daily.weathercode[i]].icon;

///////erase below??////
//             let temperatureHighLow = document.createElement("p");
//             let high = `${weatherData.daily.apparent_temperature_max[indexOfArr]} ${weatherData.hourly_units.temperature_2m}`;
//             let low = `${weatherData.daily.apparent_temperature_min[indexOfArr]} ${weatherData.hourly_units.temperature_2m}`;
          
//             temperatureHighLow.textContent = `${high} / ${low}`;

//             div.append(strongWeekday, hr, icon, temperatureHighLow);
//             row.appendChild(div);
//////erase above?//////
          
          
            let temperatureHigh = document.createElement("p");
            let temperatureLow = document.createElement("p");
            temperatureHigh.textContent = `${weatherData.daily.apparent_temperature_max[i]}${weatherData.hourly_units.temperature_2m} /`;
            temperatureLow.textContent = `${weatherData.daily.apparent_temperature_min[i]}${weatherData.hourly_units.temperature_2m}`;


//             div.append(strongWeekday, hr, icon, temperatureHigh, temperatureLow);
//             divRow.appendChild(div);
//         }
//     })
// }


// ////////
// // Init
// ////////

// fetch("http://localhost:3000/location/1")
//     .then(resp => resp.json())
//     .then(location => {
//         currentLocation = location;
//         renderLocation();
//         getWeatherData(currentLocation);
//     })
//     .catch(console.log(location));

// renderStates();