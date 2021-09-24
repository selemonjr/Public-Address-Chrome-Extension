const regionEl = document.querySelector("#region");
const addressEl = document.querySelector("#address");
const timeEl = document.querySelector("#time");
const countryEl = document.querySelector("#country");
const longitudeEl = document.querySelector("#longitude");
const latitudeEl = document.querySelector("#latitude");
window.addEventListener("DOMContentLoaded",() => {
    getResults()
});
function getResults(){
    fetch(`https://freegeoip.app/json/`)
    .then(response => response.json())
    .then(data => results(data))
}
getResults()
function results(info) {
    const address = info.ip;
    const region = info.region_name;
    const time = info.time_zone;
    const country = info.country_name;
    const longitude = info.longitude;
    const latitude = info.latitude;
    longitudeEl.innerHTML = `<p id="longitude">LONGITUDE : ${longitude}</p>`;
    latitudeEl.innerHTML = `   <p id="latitude">LATITUDE : ${latitude}</p>`;
    addressEl.innerHTML = `<p id="address">IP ADDRESS :  ${address}</p>`;
    regionEl.innerHTML = `  <p id="region">REGION : ${region}</p>`;
    timeEl.innerHTML = `  <p id="time">TIME ZONE : ${time}</p>`;
    countryEl.innerHTML = ` <p id="country">COUNTRY : ${country}</p>`;
}
results()
