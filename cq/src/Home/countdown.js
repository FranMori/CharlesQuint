import { useEffect, useState } from "react"

function CountDown() {
  const calculateTimeLeft = () => {
    const difference = +new Date ('10/07/2023') - +new Date()
  
    let timeLeft = {}
  
    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })
    
  const timerComponents = []
  
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval} {" "}
      </span>
    )
  })
  
  return (

    <div className="countdown">
      <h2>Prochaine Charles-Quint</h2>
      
      <div>
      
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  )
}

export default CountDown