// const APIKey = `3ea2acb526183189904890dbad0452df`;
// const userInput1 = document.getElementById("user-input1");
// const userInput2 = document.getElementById("user-input2");
// const button = document.getElementById("button");
// const container = document.getElementById("container");



// 5:
// a:


// function getCityWeatherByCoordinates(lon, lat) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
//   fetch(url, { method: "GET" })
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       if (data.cod === "404") {
//         return (container.innerHTML = "city is not found");
//       }
//       container.innerHTML += `
//         <h1>the temperture in ${data.name} is: ${(data.main.temp - 273.15).toFixed(
//         2
//       )}</h1>
//         <h2>temp_max: ${(data.main.temp_max - 273.15).toFixed(2)}</h2>
//         <h2>temp_min: ${(data.main.temp_min - 273.15).toFixed(2)}</h2>`;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// button.onclick = () => {
//     getCityWeatherByCoordinates(userInput1.value,userInput2.value)
// };


// 5:
// b:


// function getUserLoctaionReturnTemp() {
//   navigator.geolocation.getCurrentPosition((position) => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
//     fetch(url, { method: "GET" })
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         if (data.cod === "404") {
//           return (container.innerHTML = "city is not found");
//         }
//         container.innerHTML += `
//             <h1>the temperture in ${data.name} is: ${(
//           data.main.temp - 273.15
//         ).toFixed(2)}</h1>
//             <h2>temp_max: ${(data.main.temp_max - 273.15).toFixed(2)}</h2>
//             <h2>temp_min: ${(data.main.temp_min - 273.15).toFixed(2)}</h2>`;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(position.coords.latitude, position.coords.longitude);
//   });
// }

// getUserLoctaionReturnTemp();
