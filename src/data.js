export default class WeatherData {
  constructor() {
    this._forecast = [];
  }

  get forecast() {
    return this._forecast;
  }

  updateData(response) { 
    this._forecast = response;
  }

  getDayById (idx) {
    return this._forecast.find(i => Number(i.id) === Number(idx));
  }

  getWeatherById(idx) {
    const day = this.getDayById(idx);
    return day.weather[0].main;
  }
}
