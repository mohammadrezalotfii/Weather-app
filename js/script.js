let submit = document.getElementById("submit");
let cityInput = document.getElementById("cityInput");
let cityoutput = document.getElementById("cityoutput");
let descOutput = document.getElementById("descOutput");
let tempOutput = document.getElementById("tempOutput");
let windOutput = document.getElementById("windOutput");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

function convertToCel(value) {
  return (value - 273).toFixed(0);
}

async function GetWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${cityInput.value}&appid=${apiKey}`)
  ).json();

  setInfo(weatherResult);
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];
  cityoutput.innerHTML = `city: ${cityName}`;
  descOutput.innerHTML = `desdescription: ${description}`;
  tempOutput.innerHTML = `temp: ${convertToCel(temp)}°C`;
  windOutput.innerHTML = `wind speed: ${wind} km/h`;
}
function keyPress(){
    if(event.which === 13){
        GetWeather();
    }
}
submit.addEventListener("click", GetWeather);