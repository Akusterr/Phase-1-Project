///////////////////////////////////////////////////////////////////////////////
// This will go into a seperate data.js file
///////////////////////////////////////////////////////////////////////////////
const data = {
    weather_code: {
        "0": "clear sky",
        "1": "mainly clear",
        "2": "partly cloudy",
        "3": "overcast",
        "45": "fog",
        "48": "depositing rime fog",
        "51": "light drizzle",
        "53": "moderate drizzle",
        "55": "dense drizzle",
        "56": "light freezing drizzle",
        "57": "dense freezing drizzle",
        "61": "slight rain",
        "63": "moderate rain",
        "65": "heavy rain",
        "66": "light freezing rain",
        "67": "heavy freezing rain",
        "71": "slight snowfall",
        "73": "moderate snowfall",
        "75": "heavy snowfall",
        "77": "snow grains",
        "80": "slight rain showers",
        "81": "moderate rain showers",
        "82": "heavy rain showers",
        "85": "slight snow showers",
        "86": "heavy snow showers",
        "95": "thunderstorm",
        "96": "thunderstorm with slight hail",
        "99": "thunderstorm with heavy hail",
    },
    temperature_units: [
        {
            unit: "fahrenheit",
            abbreviation: "°F"
        },
        {
            unit: "celsius",
            abbreviation: "°C"
        }
    ],
    states: [
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
    ],
    weekday: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    },
    month: {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }
}


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
const btnToggleTemperatureUnit = document.querySelector("#temperature-toggle");
const currentDescription = document.querySelector("#current-description");
const row = document.querySelector(".row");

////////////////////////
//Spotify Songs
///////////////////////

const WEATHER_MAPPINGS = {
    "0":{
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: '<i class="fa-solid fa-sun"></i>',
    },
    "1": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: '<i class="fa-solid fa-sun"></i>'
    },    
    "2": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1CKvinIoExZec5pv8OHtzU?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: '<i class="fa-solid fa-cloud-sun"></i>'
    },
    "3": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1CKvinIoExZec5pv8OHtzU?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: '<i class="fa-solid fa-cloud"></i>'
    },
    "45": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/28xVpYZV65WjduLWVtamfK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-water"></i>`
    }  ,  
    "48": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0Zg4tjgfqw9qzq7lXX2sUM?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-smog"></i>`
    },
    "51": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26AnwFHmManlVCg0toINJc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`
    },

    "53": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2qvToeBdYliw6n0nEsKJQa?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`
    },    
    "55": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-showers-heavy"></i>`
    },
    "56": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zJMFf0EzbGCpL0zROfmVF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-meatball"></i>`
    },
    "57": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zJMFf0EzbGCpL0zROfmVF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-meatball"></i>`
    },
    "61": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zJMFf0EzbGCpL0zROfmVF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`
    },
    "63": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3i25w2HOWoafnTIiWJCL71?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`
    },
    "65": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26AnwFHmManlVCg0toINJc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-showers-heavy"></i>`
    },
    "66": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3LGsgpx4TfxhXbr07OFKqs?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "67": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3LGsgpx4TfxhXbr07OFKqs?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "71": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3OhwaetItNaTXxn0mr9SkN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "73": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "75": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "77": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "80": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`
    },
    "81": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-rain"></i>`
    },
    "82": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AKUOaCRcoKTFnVI9LtsrN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-showers-heavy"></i>`
    },
    "85": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "86": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GegHVxeozw3rdjte45Bfx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-regular fa-snowflake"></i>`
    },
    "95": {
        embededPlayer: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        icon: `<i class="fa-solid fa-cloud-bolt"></i>`
    }
}

///////////////////
// Event Listeners
///////////////////
formLocation.addEventListener("submit", (e) => {
    e.preventDefault();
    handleLocationSubmit(e)
});

btnToggleTemperatureUnit.addEventListener("click", () => toggleTemperatureUnit());

//////////////////////
// Callback Functions
//////////////////////
const handleLocationSubmit = (e) => {
    const zipCode = e.target["zip-code"].value;
    if (zipCode) {
        handleLocationSubmitByZipCode(zipCode);
    } else {
        const state = e.target.state.value;
        const city = e.target.city.value;
        handleLocationSubmitByCityState(city, state);
    }
}

const handleLocationSubmitByZipCode = (zipCode) => {
    fetch(`https://api.zippopotam.us/us/${zipCode}`)
        .then(resp => resp.json())
        .then(locationData => {
            console.log(locationData);
            updateLocationFromZipCode(locationData);
        })
        .catch(`Could not fetch data for zip code ${zipCode}`);
}

const handleLocationSubmitByCityState = (city, state) => {
    // https://api.zippopotam.us/us/co/denver
    console.log(`https://api.zippopotam.us/us/${state}/${city}`);
    fetch(`https://api.zippopotam.us/us/${state}/${city}`)
        .then(resp => resp.json())
        .then(locationData => {
            console.log(locationData);
            updateLocationFromCityState(locationData, city, state);
        })
        .catch(`Could not fetch data for ${city}, ${state}`);

}

const updateLocationFromZipCode = (locationData) => {
    currentLocation.city = locationData.places[0]["place name"];
    currentLocation.state = locationData.places[0].state;
    currentLocation.state_abbreviation = locationData.places[0]["state abbreviation"];
    currentLocation.zip = locationData["post code"];
    currentLocation.latitude = locationData.places[0].latitude;
    currentLocation.longitude = locationData.places[0].longitude;

    renderLocation();
    getWeatherData(currentLocation);
}

const updateLocationFromCityState = (locationData, city, state) => {
    currentLocation.city = city;
    currentLocation.state = ""
    currentLocation.state_abbreviation = state;
    currentLocation.zip = locationData.places[0]["post code"];
    currentLocation.latitude = locationData.places[0].latitude;
    currentLocation.longitude = locationData.places[0].longitude;

    renderLocation();
    getWeatherData(currentLocation);
}

const getWeatherData = (location) => {
    let latitude = location.latitude;
    let longitude = location.longitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&temperature_unit=${currentTemperatureUnit.unit}&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York`)
        .then(resp => resp.json())
        .then(weatherData => {
            console.log(weatherData);
            renderCurrentWeather(weatherData);
        })
        .catch(`Could not fetch weather data for ${location.city}, ${location.state_abbreviation} ${location.zip}`);
}

const getDescriptionFromWeatherCode = (weatherData) => {
    let code = weatherData.current_weather.weathercode;
    return data.weather_code[code];
}

const getWeekday = (timestamp) => {
    let numWeekday = new Date(timestamp * 1000).getDay();
    return data.weekday[numWeekday];
}

const getDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    return `${getWeekday(timestamp)}, ${data.month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const toggleTemperatureUnit = () => {
    currentTemperatureUnit = data.temperature_units[(data.temperature_units.indexOf(currentTemperatureUnit) + 1) % 2];
    getWeatherData(currentLocation);
}


/////////////////////
// Render Functions
/////////////////////
const renderStates = () => {
    data.states.forEach(state => {
        let option = document.createElement("option");
        option.value = state.abbreviation;
        option.textContent = state.state;
        stateDropDown.appendChild(option);
    })
}

const renderLocation = () => {
    console.log(currentLocation);
    currentLocationP.textContent = `${currentLocation.city}, ${currentLocation.state_abbreviation}`;
    console.log(currentLocationP);
}

const renderCurrentWeather = (weatherData) => {
    currentDay.textContent = getDate(weatherData.current_weather.time);
    currentTemp.textContent = `${weatherData.current_weather.temperature}`
    currentTempUnit.textContent = `${weatherData.hourly_units.temperature_2m}`;
    currentDescription.textContent = getDescriptionFromWeatherCode(weatherData);

    renderDailyWeather(weatherData);


    //////////////////
    //Spotify data///
    ////////////////
    let {embededPlayer, icon} = WEATHER_MAPPINGS[weatherData.current_weather.weathercode];
    console.log({embededPlayer, icon, weatherData})

    const iconTarget = document.getElementById('currentWeatherIcon');
    iconTarget.innerHTML = icon;

    // TODO Take me out when you update the weather mappings :-)
    if(!embededPlayer){
        embededPlayer =  WEATHER_MAPPINGS[weatherData.current_weather.weathercode]
    }
    // ^^

    const target = document.getElementById('spotifyTarget');
    target.innerHTML = embededPlayer;
    console.log(embededPlayer)
}

const renderDailyWeather = (weatherData) => {

    row.innerHTML = "";

    weatherData.daily.time.forEach(day => {

        let indexOfArr = weatherData.daily.time.indexOf(day);

        if (indexOfArr > 0) {

            let div = document.createElement("div");
            div.className = "col-2 weekday";

            let strongWeekday = document.createElement("strong");
            strongWeekday.textContent = getWeekday(day);

            let hr = document.createElement("hr");

            let icon = document.createElement("i");
            icon.innerHTML = WEATHER_MAPPINGS[weatherData.daily.weathercode[indexOfArr]].icon;
            console.log(weatherData.daily.weathercode[indexOfArr]);

            let temperatureHighLow = document.createElement("p");
            let high = `${weatherData.daily.apparent_temperature_max[indexOfArr]} ${weatherData.hourly_units.temperature_2m}`;
            let low = `${weatherData.daily.apparent_temperature_min[indexOfArr]} ${weatherData.hourly_units.temperature_2m}`;
            temperatureHighLow.textContent = `${high} / ${low}`;

            div.append(strongWeekday, hr, icon, temperatureHighLow);
            row.appendChild(div);

        }
    })
}

renderStates();
renderLocation();
getWeatherData(currentLocation);