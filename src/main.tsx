import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/heebo/latin-400.css'
import '@fontsource/heebo/latin-500.css'
import '@fontsource/heebo/latin-700.css'
import '@fontsource/eczar/latin-700.css'

const aMinute = 1_000 * 60
const anHour = aMinute * 60
const aDay = anHour * 24

updateRemainingTime()

function updateRemainingTime() {
    const now = Date.now()
    const event = new Date(Date.UTC(2024, 10, 25, 12, 0))
    const remain = event.getTime() - now

    if (remain < 0) {
        return
    }

    setTimeout(updateRemainingTime, 5_000)

    const days = Math.floor(remain / aDay)
    const hours = Math.floor((remain % aDay) / anHour)
    const minutes = Math.floor(((remain % aDay) % anHour) / aMinute)

    const daysEl: HTMLElement | null = document.querySelector('#remainingDays')
    const hoursEl: HTMLElement | null = document.querySelector('#remainingHours')
    const minutesEl: HTMLElement | null = document.querySelector('#remainingMinutes')
    if (daysEl == null || hoursEl == null || minutesEl == null) {
        return
    }

    daysEl.innerText = days.toString().padStart(2, '0')
    hoursEl.innerText = hours.toString().padStart(2, '0')
    minutesEl.innerText = minutes.toString().padStart(2, '0')
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
