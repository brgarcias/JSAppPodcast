// window.addEventListener('load', start) por defer

let inputCurrentFrequency = document.querySelector('#inputCurrentFrequency')
let rangeFrequencies = document.querySelector('#rangeFrequencies')
let divPodcasts = document.querySelector('#divPodcasts')

function start() {
  rangeFrequencies.addEventListener('input', handleRangeValueChange)
}

function handleRangeValueChange(e) {
  let currentFrequency = e.target.value

  setInputCurrentFrequency(currentFrequency)

  findPodcastFrom(currentFrequency)
}

function setInputCurrentFrequency(value) {
  inputCurrentFrequency.value = value
}

function findPodcastFrom(frequency) {

  let foundPodcast = null

  for (let i = 0; i < realPodcasts.length; i++) {
    const currentPodcast = realPodcasts[i]

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast
      break
    }
  }
  if (!!foundPodcast) {
    renderPodcast(foundPodcast)
  } else {
    divPodcasts.innerHTML = '<p>Nenhum podcast encontrado</p>'
  }
}

function renderPodcast(podcast) {
  divPodcasts.innerHTML = ''

  let img = document.createElement('img')
  img.src = './img' + podcast.img
  img.alt = 'Logo do podcast' + podcast.title
  img.title = podcast.title

  let title = document.createElement('h2')
  title.textContent = podcast.title

  let description = document.createElement('p')
  description.textContent = podcast.description

  divPodcasts.appendChild(img)
  divPodcasts.appendChild(title)
  divPodcasts.appendChild(description)
}

start()