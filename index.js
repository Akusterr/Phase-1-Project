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
            abbreviation: "F"
        },
        {
            unit: "celsius",
            abbreviation: "C"
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
let currentLocation = {};

// Temperature unit will default to Fahrenheit
let currentTemperatureUnit = data.temperature_units[0];


//////////////////
// DOM Selectors
//////////////////
const formLocation = document.querySelector("#location-form");
const stateDropDown = document.querySelector("#state");
const currentDay = document.querySelector("#current-day");
const currentTemp = document.querySelector("#current-temp");
const currentDescription = document.querySelector("#current-description");


///////////////////
// Event Listeners
///////////////////
formLocation.addEventListener("submit", (e) => {
    e.preventDefault();
    handleLocationSubmit(e)
});


//////////////////////
// Callback Functions
//////////////////////
const handleLocationSubmit = (e) => {
    const zipCode = e.target["zip-code"].value;
    if (zipCode) {
        console.log(`Zip code ${zipCode} entered.`);
        handleLocationSubmitByZipCode(zipCode);
    } else {
        const state = e.target.state.value;
        const city = e.target.city.value;
        console.log(`${city}, ${state}`);
        handleLocationSubmitByCityState(city, state);
    }
}

const handleLocationSubmitByZipCode = (zipCode) => {
    fetch(`https://api.zippopotam.us/us/${zipCode}`)
        .then(resp => resp.json())
        .then(locationData => {
            console.log(locationData);
            handleWeatherDataFromZipCode(locationData);
        })
        .catch(`Could not fetch data for zip code ${zipCode}`);
}

const handleLocationSubmitByCityState = (city, state) => {
    console.log(`https://api.zippopotam.us/us/${state}/${city}`);
    fetch(`api.zippopotam.us/us/${state}/${city}`)
        .then(resp => resp.json())
        .then(console.log(weatherData))
        .catch(`Could not fetch data for ${city}, ${state}`);
        handleWeatherDataFromCityState(locationData);
}

const handleWeatherDataFromZipCode = (locationData) => {
    let latitude = locationData.places[0].latitude;
    let longitude = locationData.places[0].longitude;
    handleWeatherData(latitude, longitude);
}

const handleWeatherData = (latitude, longitude) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&temperature_unit=${currentTemperatureUnit.unit}&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York`)
    .then(resp => resp.json())
    .then(weatherData => {
        console.log(weatherData);
        renderCurrentWeather(weatherData);
    })
    .catch(`Could not fetch weather data`);
}

const getDescriptionFromWeatherCode = (weatherData) => {
    let code = weatherData.current_weather.weathercode;
    return data.weather_code[code];
}

const getWeekday = (weatherData) => {
    let numWeekday = new Date(weatherData.current_weather.time * 1000).getDay();
    let date = new Date(weatherData.current_weather.time * 1000);
    return `${data.weekday[numWeekday]}, ${data.month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
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
const renderCurrentWeather = (weatherData) => {
    currentDay.textContent = getWeekday(weatherData);
    currentTemp.textContent = `${weatherData.current_weather.temperature}${String.fromCodePoint(176)}${currentTemperatureUnit.abbreviation}`;
    currentDescription.textContent = getDescriptionFromWeatherCode(weatherData);
}

renderStates();