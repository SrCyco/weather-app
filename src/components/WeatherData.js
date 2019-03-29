import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    SUN,
} from '../constants/weathers';

const WheaterData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SUN}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10 m/s'}></WeatherExtraInfo>
    </div>
);

export default WheaterData;