'use strict';
// const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
const SSD_RADAR_URL = 'https://ssd-api.jpl.nasa.gov/sb_radar.api';

function changeColorFromApi() {
  const toChange = document.getElementById('examples');
  fetch('https://reqres.in/api/products/3')
    .then((response) => response.json())
    .then((json_response) => toChange.style.color = json_response.data.color);
    // .then((json_response) => toShow.innerHTML = json_response.data.year);
    // .then((data) => console.log(data));
}
function showSolarSystemCount() {
  const toShow = document.getElementById("sp");
  const URL = 'https://api.le-systeme-solaire.net/rest/knowncount/';
  fetch(URL)
    .then((response) => response.json())
    .then((jResp) => toShow.innerHTML = jResp.knowncount[2].knownCount);
  toShow.style.fontSize = '2em';
}
function getRadarCount() {
  const toShow = document.getElementById("sp");
  fetch(CORS_ANYWHERE_URL + SSD_RADAR_URL)
  .then((response) => response.json())
  .then((jResp) => toShow.innerHTML = jResp.count);
}
