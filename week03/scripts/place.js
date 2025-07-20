//weather components
//Wind Chill Temperature = 35.74 + 0.6215×T - 35.75×V0.16 + 0.4275×T×V0.16

const temp = document.querySelector("#temperature");
const cond = document.querySelector("#condition");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#windChill");

const tempCelsius = 17;
const conditions = "Mostly Cloudy";
const windSpeedKmPerH = 13;

temp.innerHTML = `${tempCelsius} °C`;
cond.innerHTML = conditions;
wind.innerHTML = `${windSpeedKmPerH} Km/h`;

if (tempCelsius <= 10 && windSpeedKmPerH > 4.8) {
  windChill.innerHTML = `${calculateWindChill(
    tempCelsius,
    windSpeedKmPerH
  ).toFixed(2)} °C`;
} else {
  windChill.innerHTML = "N/A";
}

function calculateWindChill(temperature, windSpeed) {
  const windChill =
    13.2 +
    0.6215 * temperature -
    11.37 * windSpeed ** 0.16 +
    0.3965 * temperature * windSpeed ** 0.16;
  return windChill;
}

//Footer
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;
