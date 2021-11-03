import "./normalize.css";
import "./styles.scss";


function renderWelcomeLetter() {
  document.getElementById("root").innerHTML = `<h1>
    Hello, class!
  </h1`
}

function init() {
  renderWelcomeLetter()
}

init()