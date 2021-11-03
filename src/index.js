import "./normalize.css";
import "./styles.scss";
import weatherData from "./data";
import { getRoot, getGrid } from "./aceessors";
import { renderDays } from './days'



function init() {
  const { forecast } = weatherData

  const renderedDays = renderDays(forecast);

  getRoot().innerHTML = `<div class="widget">
  <div id="grid" class="grid">
  </div>
</div>`
  console.log(getGrid())
  getGrid().append(renderedDays)
}

init()
