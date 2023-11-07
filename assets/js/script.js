const input = document.querySelector("input");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let loc = input.value;
  input.value = "";
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${loc}`
  )
    .then((res) => res.json())
    .then((data) => {
      getLocation(
        data.location.name,
        data.location.country,
        data.current.temp_c,
        data.current.temp_f,
        data.current.condition.icon,
        data.current.condition.text
      );
    });
});

function getLocation(name, country, temp_c, temp_f, icon, text) {
  const city = document.querySelector(".content .city");
  const givenCountry = document.querySelector(".content .country");
  const tempC = document.querySelector(".content .tempC");
  const tempF = document.querySelector(".content .tempF");
  const state = document.querySelector(".content .state");
  city.innerHTML = ` <p class="city">City: ${name}</p>`;
  givenCountry.innerHTML = `<p class="country">Country: ${country}</p>`;
  tempC.innerHTML = ` <p class="tempC">Weather Forecast: ${temp_c}</p>`;
  tempF.innerHTML = ` <p class="tempF">Weather Forecast: ${temp_f}</p>`;
  state.innerHTML = `<p class="state">Sky Condition: 
  <img src="https:${icon}" alt=""> <span>${text}</span>
  </p>
  `;
}
