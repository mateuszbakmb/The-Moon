document.addEventListener('DOMContentLoaded', ()=>{

const start = document.querySelector('#startButton')
start.addEventListener('click', ()=>{
  document.querySelector('.moonOrbit').classList.toggle('hidden')
  start.classList.toggle('hidden')
  console.log("still in progress")
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

})
