import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/weather-app/icons/sunny.svg",
  "01n": "/weather-app/icons/night.svg",
  "02d": "/weather-app/icons/day.svg",
  "02n": "/weather-app/icons/cloudy-night.svg",
  "03d": "/weather-app/icons/cloudy.svg",
  "03n": "/weather-app/icons/cloudy.svg",
  "04d": "/weather-app/icons/perfect-day.svg",
  "04n": "/weather-app/icons/cloudy-night.svg",
  "09d": "/weather-app/icons/rain.svg",
  "09n": "/weather-app/icons/rain-night.svg",
  "10d": "/weather-app/icons/rain.svg",
  "10n": "/weather-app/icons/rain-night.svg",
  "11d": "/weather-app/icons/storm.svg",
  "11n": "/weather-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
