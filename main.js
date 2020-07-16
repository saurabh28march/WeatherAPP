window.addEventListener("DOMContentLoaded", solve, false);

function solve() {
  var button = document.querySelector(".button");
  var inputValue = document.querySelector(".inputValue");
  var name = document.querySelector(".name");
  var desc = document.querySelector(".desc");
  var temp = document.querySelector(".temp");
  var pressure = document.querySelector(".pressure");
  var coordinates = document.querySelector(".coordinates");
  button.addEventListener("click", function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputValue.value +
        "&appid=faa3e39015a4ceaf6a4702dc2817c46e"
    )
      .then((response) => response.json())
      .then((data) => {
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var desValue = data["weather"][0]["description"];
        var PressureValue = data["main"]["pressure"];
        var country = data["sys"]["country"];
        var lon = data["coord"]["lon"];
        var lat = data["coord"]["lat"];

        name.innerHTML = nameValue + "," + country;
        temp.innerHTML = (tempValue - 273).toPrecision(4) + " Celcius";
        desc.innerHTML = "Description:" + desValue;
        coordinates.innerHTML = "lon:" + lon + " lat:" + lat;
        pressure.innerHTML = "Pressure:" + PressureValue;
      })
      .catch((err) => alert("Wrong city name"));
  });
}
