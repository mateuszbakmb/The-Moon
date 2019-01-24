document.addEventListener('DOMContentLoaded', ()=>{

const loadingScreen = document.querySelector('.loadingScreen')
setTimeout(()=>{
  loadingScreen.classList.toggle('opacity')
  setTimeout( ()=>{loadingScreen.classList.toggle('hidden')},1000)
},3500)

const start = document.querySelector('#startButton')
start.addEventListener('click', ()=>{
  document.querySelector('.moonOrbit').classList.toggle('hidden')
  start.classList.toggle('hidden')
})

for (let i=1; i<200; i++){
  const star = document.createElement('div')
  star.className = 'star'
  star.style = `animation: twinkle ${(Math.random()*3)+3}s linear ${Math.random()*3}s infinite; top:${Math.random()*window.screen.height}px; left:${Math.random()*window.screen.width}px`
  document.querySelector('.stars').append(star)
}

const moonStart = document.querySelector('#moonStart')
moonStart.addEventListener('click', ()=>{
  document.querySelector('.moonOrbit').classList.toggle('hidden')
  document.querySelector('.moonLanding').classList.toggle('hidden')
})

const theFlag = document.querySelector('#theFlag')
theFlag.addEventListener('click', ()=>{
  document.querySelector('#module').classList.toggle('hidden')
  document.querySelector('#astro').classList.toggle('hidden')
  theFlag.classList.toggle('hidden')
  document.querySelector('#americanFlag').classList.toggle('hidden')
  document.querySelector('#goBack').classList.toggle('hidden')
})

const goBack = document.querySelector('#goBack')
goBack.addEventListener('click', ()=>{
  document.querySelector('.moonLanding').classList.toggle('hidden')
  document.querySelector('#module').classList.toggle('hidden')
  document.querySelector('#astro').classList.toggle('hidden')
  theFlag.classList.toggle('hidden')
  document.querySelector('#americanFlag').classList.toggle('hidden')
  goBack.classList.toggle('hidden')
  start.classList.toggle('hidden')
})
})
