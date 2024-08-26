import React, { useState } from 'react';
import { Input, Button, Spin, Alert } from 'antd';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../services/weatherService';
import './MainPage.css';  // Import the CSS file

const MainPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      setError('City not found or API error.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Input
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          type="primary"
          onClick={handleFetchWeather}
          disabled={loading}
          style={{ marginTop: '10px' }}
        >
          {loading ? <Spin size="small" /> : 'Get Weather'}
        </Button>
        {error && <Alert message={error} type="error" showIcon />}
        {weather && <WeatherCard weather={weather} city={city} />}
      </div>
    </div>
  );
};

export default MainPage;
