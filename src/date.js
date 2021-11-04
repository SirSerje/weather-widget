export function getCurrentDay() {
  const days = ['Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDay = new Date() .getDay();
  return days[currentDay-1];
}

export function getTime() {
  const time = new Date();
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

