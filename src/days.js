export function renderDays(data) {
  let fragment = new DocumentFragment();
  data.forEach(day => {
    let div = document.createElement('div')
    div.setAttribute('class', 'day')
    div.innerHTML = `<p>${day.day}</p>
      <span class="hi">${day.hi}</span>
      <span class="low">${day.low}</span>`
      
    fragment.append(div)
  })
  return fragment
}