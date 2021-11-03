import "./normalize.css";
import "./styles.scss";
import weatherData from "./data";
import { getRoot, getGrid } from "./aceessors";
import { renderDays } from './days'


/*
 { day: "Wed", hi: 13, low: 2 },
    { day: "Thu", hi: 8, low: 6 },
    { day: "Fri", hi: -1, low: -5 },
    { day: "Sat", hi: -1, low: -5 },
    { day: "Sun", hi: -1, low: -5 },
    { day: "Mon", hi: -1, low: -5 },
    { day: "Tue", hi: -1, low: -5 },
*/
function getCurrentDay() {
  const days = ['Mon', 'Tue', "wed", "Thu", "Fri", "Sat", "Sun"]
  const currentDay = new Date().getDay()
  return days[currentDay-1]
}

function init() {
  const { forecast } = weatherData
  const currentDay = getCurrentDay()
  const renderedDays = renderDays(forecast, currentDay);

  getRoot().innerHTML = `<div id="ww" class="widget common">
  <div id="grid" class="grid">
    </div>
  </div>`
  getGrid().append(renderedDays)
  const element = document.getElementById("ww")
  
  
}

init()
