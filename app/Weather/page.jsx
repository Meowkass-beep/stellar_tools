"use client";

import axios from "axios";
import Layout from "../components/Layout";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchWeather();
    }
  };

  const fetchWeather = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY ;
    console.log(apiKey);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Cidade não encontrada. Tente novamente.");
      setWeather(null);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-3xl font-bold text-center mb-4">Weather Forecast</h1>
        
        <input
          className="border border-gray-300 p-2 rounded-md w-full max-w-xs text-black text-center mb-4"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        
        <button
          className="bg-[#3e4480] hover:bg-[#525ab4] text-white font-semibold py-2 px-4 rounded-md"
          onClick={fetchWeather}
          type="submit"
        >
          Consultar
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weather && (
          <div className="mt-8 text-center bg-white text-black p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-2xl font-bold mb-2">{weather.name}, {weather.sys.country}</h2>
            <p className="text-lg">Condition: {weather.weather[0].description}</p>
            <p className="text-lg">Temperature: {weather.main.temp}°C</p>
            <p className="text-lg">Humidity: {weather.main.humidity}%</p>
            <p className="text-lg">Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Weather;
