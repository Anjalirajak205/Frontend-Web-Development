import React, { useState, useEffect } from "react";
import "./App.css";

function Stopwatch() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer); // cleanup
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1> Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <div className="button-container">
        <button onClick={handleStart} className="btn start">
          Start
        </button>
        <button onClick={handleStop} className="btn stop">
          Stop
        </button>
        <button onClick={handleReset} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
