import axios from 'axios';
import { supabase } from '../supabaseClient';

export const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    console.log('API Response:', response.data); // Log the response

    if (response.data.cod !== 200) {
      throw new Error(`API error: ${response.data.message}`);
    }

    const weatherData = {
      city: city,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };

    // Save data to Supabase
    await saveWeatherData(weatherData);

    return weatherData;
  } catch (error) {
    if (error.response) {
      console.error('API error:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

const saveWeatherData = async (weatherData) => {
  const { city, temperature, humidity, condition, icon } = weatherData;

  const { data, error } = await supabase
    .from('weather_data')
    .insert([
      { city, temperature, humidity, condition, icon }
    ]);

  if (error) {
    console.error('Error saving data:', error);
  } else {
    console.log('Data saved:', data);
  }
};
