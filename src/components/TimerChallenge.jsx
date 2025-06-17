import { useState, useRef } from "react";
import ResultModal from "./ResultsModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dailog = useRef();

  const [timerRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dailog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
