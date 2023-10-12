document.querySelector('.button').addEventListener('click', learn)

function learn() {
  let numToLearn = document.querySelector('.input').value
  let typeOfFact = document.querySelector('#type-of-fact').value
  let url = `http://numbersapi.com/${numToLearn}/${typeOfFact}?json`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('.numberSearched').innerText = numToLearn
      document.querySelector('.fact').innerText = data.text 
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
}