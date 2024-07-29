import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isTimeTicking, setStatus] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimeTicking) {
      timer = setTimeout(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [isTimeTicking, time]);

  const startTime = () => {
    setStatus(true);
  };

  const stopTime = () => {
    setStatus(false);
  };

  const resetTime = () => {
    setStatus(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="main">
      <div className="time">
        {time.hours}:{time.minutes}:{time.seconds}
      </div>
      <button className="button" onClick={startTime}>
        Start
      </button>
      <button className="button" onClick={stopTime}>
        Stop
      </button>
      <button className="button" onClick={resetTime}>
        Reset
      </button>
    </div>
  );
}
