import React from 'react';

const WeatherData = ({ day, conditions, time }) => {
  return (
    <div>
      <h2>{day}</h2>
      <p>
        <span>Conditions: {conditions}</span>
      </p>
      <p>
        <span>Time:</span> {time}
      </p>
    </div>
  );
};

export default WeatherData;
