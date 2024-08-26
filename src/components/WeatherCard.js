import React from 'react';
import { Card, Row, Col } from 'antd';

const WeatherCard = ({ weather, city }) => (
  <Card title={`Weather in ${city}`} style={{ marginTop: '20px', width: 300 }}>
    <Row>
      <Col span={12}>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Condition: {weather.condition}</p>
      </Col>
      <Col span={12}>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
        />
      </Col>
    </Row>
  </Card>
);

export default WeatherCard;
