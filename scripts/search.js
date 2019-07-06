window.onload = function () {
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    let voSelector = document.getElementById('vo-selector').value
    let searchTarget = document.getElementById('search-target').value
    window.open(`https://duckduckgo.com/?q=${voSelector}+voor+${searchTarget}`)
  })
  document.getElementById('pizza').addEventListener('click', function (e) {
    alert('Ter vervanging van hopeloos verouderde cookies, maakt DuckDuckVo gebruik van pizza\'s.')
    window.open('pizza.html')
  })
}
