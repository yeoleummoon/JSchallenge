const API_KEY = "54334887fe6abc2bfd9eea97e6c5f219";

function onGeoOk(place){
  const lat = place.coords.latitude;
  const lon = place.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
  const cityContainer= document.querySelector("#weather span");
  const weatherContainer = document.querySelector("#weather img");
  cityContainer.innerText = data.name;
  const weatherIcon = data.weather[0].icon;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  weatherContainer.setAttribute('src', weatherIconUrl);
  })
}

function onGeoError(){
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
