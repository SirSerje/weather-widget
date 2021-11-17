import { humanizedDay, humanizedMonth } from './date';

// TODO: fix 'feels_like' later
export function responseAdapter(data) {
  return Object
    .values(data.daily)
    .map(({temp, ...rest}) => ({
      date : unixToDate(rest.dt),
      day : humanizedDay(unixToDate(rest.dt).getDay()),
      month : humanizedMonth(unixToDate(rest.dt).getMonth()),
      numDay : unixToDate(rest.dt).getDate(),
      hi : kToC(temp.max),
      low : kToC(temp.min),
      id : rest.dt,
      ...rest}));
}

const unixToDate = (unix) => {
  var date = new Date(unix * 1000);
  return date;
}; 

export const kToC = (kelvinTemp) => {
  return Math.round(kelvinTemp - 273);
};