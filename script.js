let seconds = document.querySelector('.p_s')
let minutes = document.querySelector('.p_m')
let hours = document.querySelector('.p_h')
let digital = document.querySelector('.digital')

let words = document.querySelectorAll('.words li')
let wordsActive = 0

function updateClock() {
  let now = new Date()
  let secondsNow = now.getSeconds() 
  let minutesNow = now.getMinutes() 
  let hoursNow = now.getHours() 

  digital.innerText = `${addZeroNoDigital(hoursNow)} : ${addZeroNoDigital(minutesNow)} : ${addZeroNoDigital(secondsNow)}`

  let sDeg = ((360/60) * secondsNow) - 90
  let mDeg = ((360/60) * minutesNow) - 90
  let hDeg = ((360/12) * hoursNow) - 90

  seconds.style.transform = `rotate(${sDeg}deg)`  
  minutes.style.transform = `rotate(${mDeg}deg)`  
  hours.style.transform = `rotate(${hDeg}deg)`  
}

function addZeroNoDigital(timer){
  return (timer < 10) ? `0${timer}` : timer
}

setInterval(updateClock, 1000)
updateClock()

/*   animando palavras em torno do relogio*/
setInterval(wordsActiveNow, 2000)

function wordsActiveNow(){
  words[wordsActive].classList.add('active')

  setTimeout(removendoActive, 1000)
}

function removendoActive(){
  words[wordsActive].classList.remove('active')
 
  if (wordsActive === 11){
    wordsActive = -1
  }
  wordsActive++
}
