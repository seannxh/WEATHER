import React from 'react';

const WeatherData = ({conditions, time }) => {
  return (
    <div>
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
