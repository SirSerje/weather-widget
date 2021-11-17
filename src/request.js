import { mock } from './mock';
export const requestData = (lat,lon) => new Promise((resolve, reject) => {
  console.log(lat , lon);
  /*
  if you  need to store some private data, which will not be stored in git
  but you need to use it in code (like api key | passwords | unique vars)
  you can store it in .env file:
  just put .env file into the root of your application
  with e.g.:
  API_KEY=232463457456
  and access to this var you can see on next line of code:
  just dont forget to restart the app!
  */
  resolve(mock); // because I dont want to comment all code below:

  // eslint-disable-next-line no-undef
  const key = process.env.API_KEY;
  if(key) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Math.round(lat)}&lon=${Math.round(lon)}&exclude=hourly,minutely&appid=${key}`)
      .then(result => result.json().then(resolve))
      .catch(error => {
        console.log(error);
        return reject(`cant receive data, ${error.message}`);
      });
  } else {
    resolve(mock); 
  }
  
});
