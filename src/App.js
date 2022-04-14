import "./styles.css";

import { useState } from "react";
import StopWatchStopped from "./components/StopWatchStopped";
import StopWatchInitial from "./components/StopWatchInitial";
import StopWatchRunning from "./components/StopWatchRunning";
import Laps from "./components/Laps";

export default function StopWatchApp() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [time, setTime] = useState();
  const [laps, setLaps] = useState([]);

  return (
    <div>
      {!hasStarted && <StopWatchInitial requestStart={handleStart} />}
      {hasStarted && !isPausing && (
        <StopWatchRunning requestStop={handleStopOrResume} requestLap={handleLap} startTimeMs={time} />
      )}
      {hasStarted && isPausing && (
        <StopWatchStopped requestReset={handleReset} requestResume={handleStopOrResume} startTimeMs={time} />
      )}
      <Laps laps={laps} />
    </div>
  );

  function handleStart() {
    setHasStarted(true);
    setIsPausing(false);
    setTime(Date.now());
  }

  function handleStopOrResume() {
    setIsPausing(!isPausing);
    setTime(Date.now() - time);
  }

  function handleLap() {
    const newLaps = [...laps, Date.now() - time];
    setLaps(newLaps);
  }

  function handleReset() {
    setHasStarted(false);
    setIsPausing(false);
    setLaps([]);
    setTime(Date.now());
  }
}
