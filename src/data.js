const weatherData = {
  forecast : [
    { id : 0, day : 'Wed', hi : 13, low : 2, humidity : 2, },
    { id : 1,day : 'Thu', hi : 8, low : 6, humidity : 4, },
    { id : 2,day : 'Fri', hi : -1, low : -5, humidity : 12, },
    { id : 3,day : 'Sat', hi : -1, low : -5, humidity : 45, },
    { id : 4,day : 'Sun', hi : -1, low : -5, humidity : 56, },
    { id : 5,day : 'Mon', hi : -1, low : -5, humidity : 57, },
    { id : 6,day : 'Tue', hi : -1, low : -5, humidity : 78, },
    { id : 7,day : 'Wed', hi : 13, low : 2, humidity : 12, },
    { id : 8,day : 'Thu', hi : 8, low : 6, humidity : 5, },
    { id : 9,day : 'Fri', hi : -1, low : -5, humidity : 12, },
    { id : 10,day : 'Sat', hi : -1, low : -5, humidity : 11, },
    { id : 11,day : 'Sun', hi : -1, low : -5, humidity : 22, },
    { id : 12,day : 'Mon', hi : -1, low : -5, humidity : 23, },
    { id : 13,day : 'Tue', hi : -1, low : -5, humidity : 75, },
    
  ],
  getDayById (idx) {
    return this.forecast.find(i => Number(i.id) === Number(idx));
  }
};


export default weatherData;