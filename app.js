const dayLimit = document.querySelector(".day-limit")
const day = document.querySelector(".day")
const hours = document.querySelector(".hours")
const minute = document.querySelector(".min")
const seconde = document.querySelector(".sec")

// date d'achat limite
const dateLimit = new Date(2023, 5, 19, 9, 30, 0)

// date du jour

// format de date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
}

const formatter = new Intl.DateTimeFormat("fr-FR", options)
const dateLimitFormat = formatter.format(dateLimit)
dayLimit.textContent = dateLimitFormat

function cooldown() {
  const datePresent = new Date()
  const presentInMs = datePresent.getTime()
  const limitInMs = dateLimit.getTime()

  const timer = (limitInMs - presentInMs) / 1000

  const timerSec = Math.floor(timer % 60)
  const timerMin = Math.floor((timer / 60) % 60)
  const timerHrs = Math.floor((timer / 60 / 60) % 24)
  const timerDays = Math.floor(timer / 60 / 60 / 24)

  seconde.textContent = timerSec
  minute.textContent = timerMin
  hours.textContent = timerHrs
  day.textContent = timerDays
}

setInterval(cooldown, 1000)
