/* eslint-disable no-unreachable */
import { mock } from './mock';

export const fetchWeather = (key) => new Promise((resolve, reject) => {
  return resolve(mock);
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=30&exclude=hourly,minutely&appid=${key}`)
    .then(i => {
      i.json().then(resolve);
    }).catch(reject);

});