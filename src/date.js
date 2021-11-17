const days = ['Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV', 'DEC'];

export function getCurrentDay() {
  const currentDay = new Date().getDay();
  return days[currentDay-1];
}
export function humanizedMonth(num) {
  return months[num];
}
export function humanizedDay(num) {
  return days[num];
}

function humanize(i) {
  if(typeof i !== 'number') {
    console.warn('humanize() recieves not a number value');
  }
  return i<10 ? `0${i}` : i;
}
export function getTime() {
  const time = new Date();
  return `${humanize(time.getHours())}:${humanize(time.getMinutes())}:${humanize(time.getSeconds())}`;
}

