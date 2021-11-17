export const getCoordinates = () => new Promise((resolve, reject) => {
  if(navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(`Coordinates: ${lat} ${lon}`);
      resolve({lat, lon});
    });
  } else {
    reject(new Error('cant get GPS '));
  }
});